import { Like, Post, User } from "@prisma/client";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type FullPostTypes = Post & {
	user: User;
	Likes?: Like[];
};

export type FullLikeTypes = Like & {
	user: User;
};

export type FullUserTypes = User & {
	posts: Post[];
};

export interface PostsRefetchStoreType {
	refetchPost: boolean;
	setRefetchPosts: (isRefetch: boolean) => void;
}

export interface ParamsTypes {
	params: {
		id: string;
	};
}
