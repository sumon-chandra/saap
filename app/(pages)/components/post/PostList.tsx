"use client"
import { FC } from "react";
import SinglePost from "./Post";
import { FullPostTypes } from "@/types";

interface PostListProps {
    posts: FullPostTypes[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
    // console.log(posts);

    return (
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList
