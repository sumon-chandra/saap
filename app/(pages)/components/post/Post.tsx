"use client";
import { Card, Divider } from "@nextui-org/react";
import { FC } from "react";
import { FullPostTypes } from "@/types";
import PostBody from "./PostContent";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostSkeleton from "./PostSkeleton";

interface PostProps {
	post: FullPostTypes;
	isLoading: boolean;
	isPending: boolean;
}

const SinglePost: FC<PostProps> = ({ post, isLoading, isPending }) => {
	if (isLoading || isPending) {
		return <PostSkeleton />;
	}
	return (
		<Card className="w-full shadow-none rounded  bg-saap-bg-primary dark:bg-saap-bg-dark-secondary">
			<PostHeader post={post} />
			<PostBody post={post} />
			<Divider />
			<PostFooter post={post} />
		</Card>
	);
};

export default SinglePost;
