"use client";
import SinglePost from "./Post";
import { FullPostTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostList = () => {
	// console.log(posts);
	const {
		data: posts,
		isLoading,
		isPending,
	} = useQuery<FullPostTypes[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			return await axios
				.get(`/api/post`)
				.then((response) => response.data);
		},
	});
	return (
		<div className="flex flex-col gap-4">
			{posts?.map((post) => (
				<SinglePost
					key={post.id}
					post={post}
					isLoading={isLoading}
					isPending={isPending}
				/>
			))}
		</div>
	);
};

export default PostList;
