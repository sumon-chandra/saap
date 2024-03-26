import { NextAuthOptions, Session } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../lib/prismadb";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { generateUserName } from "@/src/utils/generateUsername";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Credentials({
			name: "credentials",
			credentials: {
				email: {
					label: "email",
					type: "string",
				},
				password: {
					label: "password",
					type: "string",
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials!!");
				}
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.hashedPassword) {
					throw new Error("Invalid credentials!!");
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials?.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error("Invalid password!!");
				}

				return user;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.userName = user.userName || generateUserName(user.email!);
			}
			return token;
		},
		async session({ session, token }) {
			session.user.userName = token.userName;
			session.user.id = token.id;

			// Update username incase user login with google
			await prisma.user.update({
				where: {
					id: session.user.id,
				},
				data: {
					userName: session.user.userName!,
				},
			});
			return session;
		},
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};
