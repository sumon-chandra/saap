"use client";
import SinglePost from "./Post";
import { PostsRefetchStoreType } from "../../../../types";
import PostSkeleton from "./PostSkeleton";
import { useRefetchPosts } from "@/src/store/posts-store";
import { FC } from "react";
import { useGetPosts } from "@/src/hooks/useGetPosts";

interface PostListProps {
  profilePosts?: boolean;
  userId?: string;
}

const PostList: FC<PostListProps> = ({ profilePosts, userId }) => {
  // console.log({ profilePosts, userId });

  const setRefetchPosts = useRefetchPosts(
    (state: PostsRefetchStoreType) => state.setRefetchPosts
  );
  const refetchPosts = useRefetchPosts(
    (state: PostsRefetchStoreType) => state.refetchPosts
  );

  const {
    data: posts = [],
    isFetching,
    refetch,
    isLoading,
    isPending,
    isFetched,
  } = useGetPosts({ profilePosts, userId });

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
