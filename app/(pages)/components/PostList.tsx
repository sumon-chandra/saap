"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SinglePost from "./Post";
import { Post } from "@prisma/client";

const PostList = () => {
    const {
        data: posts = [],
        isLoading,
        isFetched,
        isError,
        error,
        isPending
    } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios.get<Post[]>(`/api/post`)
            return response.data
        }
    })

    console.log(posts);
    return (
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList
