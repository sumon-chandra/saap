import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
    try {
        const { body } = await request.json();
        const { name, email, password } = body;

        if (!email || !password || !name) {
            return new NextResponse("Invalid Credentials!!", { status: 401 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const existingUser = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (existingUser?.email === email) {
            return new NextResponse("User already exists!!", { status: 409 })
        }

        const user = await prisma.user.create({
            data: { name, email, hashedPassword }
        })

        return user
    } catch (error: any) {
        console.log("REGISTRATION_ERROR", error);
        return new NextResponse("Registration failed!!", { status: 500 })
    }
}