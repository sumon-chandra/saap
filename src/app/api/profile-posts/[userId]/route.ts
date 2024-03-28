import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";
import { AxiosError } from "axios";

export async function GET(request: Request, { params }: { params: { userId: string } }) {
	try {
		const posts = await prisma?.post.findMany({
			where: {
				userId: params.userId,
			},
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
		return new NextResponse("Error getting posts!!", {
			status: 405,
		});
	}
}
