"use client";
import SinglePost from "./Post";
import { FullPostTypes } from "../../../../types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostSkeleton from "./PostSkeleton";

const PostList = () => {
	// console.log(posts);
	const {
		data: posts,
		isLoading,
		isPending,
		isFetching,
	} = useQuery<FullPostTypes[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			return await axios
				.get(`/api/post`)
				.then((response) => response.data);
		},
		staleTime: 1000 * 60,
	});

	if (isFetching || isLoading || isPending) {
		return (
			<div className="space-y-6">
				<PostSkeleton />
				<PostSkeleton />
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-4">
			{posts?.map((post) => (
				<SinglePost key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostList;
