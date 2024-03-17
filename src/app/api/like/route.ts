import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
import { AxiosError } from "axios";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		// console.log({ body });

		const { postId, userId } = body;

		// Check is the user already liked on this post or not
		const isLiked = await prisma.like.findFirst({
			where: {
				postId,
				userId,
			},
		});

		// console.log({ isLiked });

		if (isLiked) {
			return NextResponse.json("already-liked");
		}

		const newLike = await prisma.like.create({
			data: {
				postId,
				userId,
			},
			include: {
				user: {
					select: {
						id: true,
						name: true,
						image: true,
					},
				},
			},
		});
		// console.log({ newLike });

		// const updatePost = await prisma.post.update({
		//    where: {
		//       id: postId
		//    },
		//    data: {
		//       updatedAt: new Date(),
		//       likes: {
		//          connect: {
		//             id: newLike.id,
		//             postId: newLike.postId,
		//             userId: newLike.userId
		//          }
		//       }
		//    },
		//    include: {
		//       user: {
		//          select: {
		//             id: true,
		//             name: true,
		//             image: true
		//          }
		//       }
		//    }
		// })

		// console.log({ updatePost });

		// console.log({ newLike });

		return NextResponse.json(newLike);
	} catch (error: any) {
		console.log("ERROR_WHILE_LIKE", error);
		return new NextResponse(
			"Internal Server Error while like!!",
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const likes = await prisma.like.findMany({
			include: {
				user: {
					select: {
						name: true,
						image: true,
						id: true,
					},
				},
			},
		});

		if (!likes) {
			return [];
		}
		// console.log({ likes });

		return NextResponse.json(likes);
	} catch (e) {
		const error = e as AxiosError;
		console.log("ERROR TO GET LIKES", error);
		return new NextResponse("Error getting likes!!", {
			status: 405,
		});
	}
}
