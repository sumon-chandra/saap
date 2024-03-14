import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"]
    }
    interface User extends DefaultUser {
        id: string;
        userName: string | null
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string;
        userName: string | null
    }
}