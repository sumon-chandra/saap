import prisma from "../../lib/prismadb";

export const getPosts = async () => {
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
		return posts;
	} catch (error: any) {
		return [];
	}
};
