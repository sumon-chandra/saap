"use client";
import SinglePost from "./Post";
import { FullPostTypes, PostsRefetchStoreType } from "../../../../types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostSkeleton from "./PostSkeleton";
import { useRefetchPosts } from "@/src/store/posts-store";

const PostList = () => {
	const setRefetchPosts = useRefetchPosts((state: PostsRefetchStoreType) => state.setRefetchPosts);
	const refetchPosts = useRefetchPosts((state: PostsRefetchStoreType) => state.refetchPost);
	const {
		data: posts = [],
		isLoading,
		isPending,
		isFetching,
		refetch,
		isFetched,
	} = useQuery<FullPostTypes[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			return await axios(`/api/post`).then((response) => response.data);
		},
		staleTime: 60000 * 10,
	});

	if (isFetching || isLoading || isPending) {
		return (
			<div className="space-y-6">
				<PostSkeleton />
				<PostSkeleton />
			</div>
		);
	}

	if (refetchPosts) {
		refetch();
	}

	if (isFetched) {
		setRefetchPosts(false);
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
