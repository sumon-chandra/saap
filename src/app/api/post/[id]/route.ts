import prisma from "@/src/lib/prismadb";
import { ParamsTypes } from "@/src/types";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: ParamsTypes) {
	try {
		const id = params.id;
		// console.log({ ParamsId: id });
		const deletePost = await prisma.post.delete({
			where: { id },
		});
		// console.log({ deletePost });
		return NextResponse.json(deletePost);
	} catch (e) {
		const error = e as AxiosError;
		console.log("ERROR DE DELETE", error);
		return new NextResponse("Error while deleting the post!!", {
			status: 403,
		});
	}
}

export async function PUT(request: Request, { params }: ParamsTypes) {
	try {
		const responseBody = await request.json();
		const { body, image } = responseBody;
		const id = params.id;
		// console.log({ ParamsId: id, body, image });
		const editPost = await prisma.post.update({
			where: { id },
			data: {
				body,
				image,
			},
		});
		// console.log({ editPost });
		return NextResponse.json(editPost);
	} catch (e) {
		const error = e as AxiosError;
		console.log("ERROR WHILE EDITING", error);
		return new NextResponse("Error while editing the post!!", {
			status: 403,
		});
	}
}
