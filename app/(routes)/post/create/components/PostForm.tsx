"use client"
import { ChangeEvent, useMemo, useState } from "react";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { IoImages } from "react-icons/io5";
import { toast } from "sonner";

interface PostProps {
    body: string;
    image?: string;
}

const PostForm = () => {
    const [post, setPost] = useState<PostProps | null>({
        body: "",
        image: "",
    })

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost((prevPost) => {
            return { ...prevPost, body: e.target.value }
        })
    };

    const {
        data,
        error,
        isPending,
        isError,
        isSuccess,
        mutate
    } = useMutation({
        mutationFn: (newPost: PostProps) => {
            return axios.post("/api/post", newPost)
        }
    })

    useMemo(() => {
        if (isSuccess) {
            toast.success(<div className="text-[16px]">Post created successfully!</div>)
        }
        if (isError) {
            console.log(isError);

            toast.error(<div className="text-[16px]">Something went wrong, please try again!!</div>)
            console.log(error);
        }
    }, [error, isError, isSuccess])

    const handlePost = () => {
        if (post?.body) {
            mutate(post)

        } else {
            toast.error("Post is can't be empty!!")
        }
    }
    const handleDiscard = () => { };

    return (
        <div className='p-4 rounded bg-saap-bg-secondary dark:bg-saap-bg-dark-primary'>
            <div className={clsx(
                'h-32 max-w-lg mx-auto'
            )}>
                <textarea
                    onChange={(e) => handleOnChange(e)}
                    value={post?.body}
                    placeholder="What's in your mind?"
                    disabled={isPending}
                    className={clsx(
                        "w-full h-full resize-none bg-saap-transparent focus:border-none focus:outline-none no-scrollbar text-saap-text-secondary dark:text-saap-text-dark-secondary"
                    )}
                />
            </div>
            <div>
                <Tooltip content="Add image">
                    <Button
                        isIconOnly
                        radius="full"
                        className="p-0 bg-saap-transparent text-saap-primary hover:text-saap-secondary "
                    >
                        <IoImages size={20} />
                    </Button>
                </Tooltip>
            </div>
            <Divider className="my-2" />
            <div className='flex items-center justify-end gap-3 px-4'>
                <div>
                    <Button
                        color="danger"
                        className="font-semibold rounded-full"
                        onClick={handleDiscard}
                    >
                        Discard
                    </Button>
                </div>
                <div>
                    <Button
                        className="font-semibold rounded-full bg-saap-primary text-saap-bg-primary disabled:cursor-not-allowed"
                        onClick={handlePost}
                        disabled={isPending}
                        isLoading={isPending}
                    >
                        Post
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PostForm
