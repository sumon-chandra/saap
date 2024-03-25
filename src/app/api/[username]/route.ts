import prisma from "@/src/lib/prismadb";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";
import getLoggedUser from "../../_actions/getLoggedUser";

export async function GET(request: Request, { params }: { params: { username: string } }) {
	try {
		if (!params?.username) {
			return new NextResponse("Something went wrong!!, please try again.", { status: 404 });
		}

		const loggedUser = await getLoggedUser();

		if (!loggedUser) {
			return new NextResponse("Something went wrong!!, please try again.", { status: 404 });
		}

		const userProfile = await prisma.user.findMany({
			where: {
				userName: params.username,
			},
			include: {
				posts: {
					where: {
						userId: loggedUser?.id,
					},
				},
			},
		});

		if (!userProfile) {
			console.log("No user profile found!!");
			return new NextResponse("No user profile found!!", { status: 404 });
		}

		console.log({ userProfile });

		return NextResponse.json(userProfile);
	} catch (e) {
		const error = e as AxiosError;
		console.log("ERROR WHILE GET USER PROFILE", error);
		return new NextResponse("Error while getting user profile!", { status: 404 });
	}
}
