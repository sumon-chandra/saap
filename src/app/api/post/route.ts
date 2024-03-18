import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
import getLoggedUser from "../../../app/_actions/getLoggedUser";
import { AxiosError } from "axios";

export async function POST(request: Request) {
	try {
		const responseBody = await request.json();
		const { body, image } = responseBody;
		const user = await getLoggedUser();

		if (!body) {
			return new NextResponse(
				"Post's cannot be empty!!",
				{ status: 401 }
			);
		}

		if (!user) {
			return new NextResponse(
				"Failed to detect author!!",
				{ status: 402 }
			);
		}

		const post = await prisma.post.create({
			data: {
				body,
				image,
				userId: user.id,
			},
			include: {
				likes: true,
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		console.log("ERROR_WHILE_POST", error);
		return new NextResponse(
			"Internal Server Error, while Posting!! Please try again",
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const posts = await prisma?.post.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				user: true,
				likes: true,
			},
		});

		if (!posts) {
			console.log("ERROR WHILE GETTING LIKES");
			return new NextResponse("Posts not found!!", {
				status: 404,
			});
		}

		return NextResponse.json(posts);
	} catch (e: any) {
		const error = e as AxiosError;
		console.log("ERROR TO GET POSTS", error);
		return new NextResponse("Error getting likes!!", {
			status: 405,
		});
	}
}
