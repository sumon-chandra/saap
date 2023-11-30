import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prismadb"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "string" },
                password: { label: "password", type: "string" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials!!")
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid credentials!!")
                }

                const isCorrectPassword = await bcrypt.compare(credentials?.password, user.hashedPassword)

                if (!isCorrectPassword) {
                    throw new Error("Invalid password!!")
                }

                return user
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}