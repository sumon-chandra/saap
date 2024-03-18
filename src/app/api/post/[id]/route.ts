import prisma from "@/src/lib/prismadb";
import { ParamsTypes } from "@/src/types";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: ParamsTypes) {
	try {
		const id = params.id;
		console.log({ ParamsId: id });
		const deletedPost = await prisma.post.delete({
			where: { id },
		});
		console.log({ deletedPost });
		return NextResponse.json(deletedPost);
	} catch (e) {
		const error = e as AxiosError;
		console.log("ERROR DE DELETE", error);
		return new NextResponse("Error while deleting the post!!", {
			status: 403,
		});
	}
}
