import { Like, Post, User } from "@prisma/client";
import { SVGProps } from "react";
import { PostProps } from "../app/(pages)/components/post-form-modal/PostFormModal";

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
	refetchPosts: boolean;
	setRefetchPosts: (isRefetch: boolean) => void;
}

export interface ParamsTypes {
	params: {
		id: string;
	};
}

export interface PostTextareaProps {
	value?: string;
	disabled?: boolean;
	defaultValue?: PostProps;
	minRow: number;
}

export interface SaapButtonProps {
	value: string;
	variant: "default" | "action";
	isLoading?: boolean;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}