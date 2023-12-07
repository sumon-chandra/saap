"use client"
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Divider } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { toast } from "sonner";
import { IoImage } from "react-icons/io5";
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import useAutosizeTextArea from "@/app/hooks/useAutosizeTextarea";
import { PiSpinnerLight } from "react-icons/pi";


export interface PostProps {
    body?: string;
    image?: string;
}

interface EdgeStoreImageProps {
    url: string;
    size: number;
    uploadedAt: Date;
    metadata: Record<string, never>;
    path: Record<string, never>;
    pathOrder: string[];
}

const PostForm = () => {
    const [imageLoading, setImageLoading] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<EdgeStoreImageProps | null>(null)
    const [imageContainerVisible, setImageContainerVisible] = useState(false)
    const { edgestore } = useEdgeStore();
    const [post, setPost] = useState<PostProps | null>({
        body: "",
        image: "",
    })

    // Autosize Textarea
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    useAutosizeTextArea(textareaRef.current, post?.body!)

    // handle textarea changes
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost((prevPost) => {
            return { ...prevPost, body: e.target.value }
        })
    };

    // Handle post with @tenstack/react-query
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

    // POST handler - using useMutation()
    const handlePost = () => {
        if (post) {
            mutate(post)
            console.log({ post });
        } else {
            toast.error("Post is can't be empty!!")
        }
    }

    // Display toast messages based on the POST event
    useMemo(() => {
        if (isSuccess) {
            toast.success(<div className="text-[16px]">Post created successfully!</div>)
            setPost(null)
            setFile(null)
            setImage(null)
            setImageContainerVisible(false)
        }
        if (isError) {
            console.log(isError);
            toast.error(<div className="text-[16px]">Something went wrong, please try again!!</div>)
            console.log(error);
        }
    }, [error, isError, isSuccess])

    // Store image on Edge Store 
    useEffect(() => {
        setImage(null)
        const handleImageUpload = async () => {
            setImageContainerVisible(true)

            if (file) {
                const res = await edgestore.publicFiles.upload({
                    file,
                    onProgressChange: (progress) => {
                        setImageLoading(true)
                        // console.log(progress);
                    },
                });
                setImageLoading(false)
                setImage(res)
                setPost((previous) => {
                    return {
                        ...previous,
                        image: res?.url!
                    }
                })
            }
        }

        handleImageUpload()
        setFile(null)
    }, [edgestore, file,])

    // Delete image handler
    const handleDeleteImage = useCallback(() => {
        setImageContainerVisible(false)
        async function deleteImage() {
            if (image?.url) {
                await edgestore.publicFiles.delete({
                    url: image.url,
                });
            }
            setImage(null)
        }
        deleteImage()
    }, [edgestore, image?.url])

    // handler discard post
    const handleDiscard = () => {
        setPost(null)
        setFile(null)
        setImage(null)
        setImageContainerVisible(false)
    };

    // Image skeleton
    const skeleton = (
        <div className="w-32 space-y-5 p-2 bg-saap-transparent rounded-xl">
            <div className="animate-pulse flex space-x-4">
                <div className="bg-default-300 dark:bg-saap-bg-dark-secondary w-full h-32 rounded-lg"></div>
            </div>
        </div>
    )

    return (
        <div className='p-4 rounded bg-saap-bg-secondary dark:bg-saap-bg-dark-primary'>
            <div className={clsx(
                'max-w-lg mx-auto'
            )}>
                <textarea
                    ref={textareaRef}
                    onChange={(e) => handleOnChange(e)}
                    value={post?.body}
                    placeholder="What's in your mind?"
                    disabled={isPending}
                    className={clsx(
                        "w-full max-h-60 resize-none bg-saap-transparent focus:border-none focus:outline-none no-scrollbar text-saap-text-secondary dark:text-saap-text-dark-secondary"
                    )}
                />
            </div>
            <div className="py-4">
                {imageContainerVisible && (
                    <div className={clsx("relative w-32 drop-shadow-xl shadow-saap-bg-dark-primary dark:shadow-saap-bg-dark-secondary group")}>
                        {
                            imageLoading ? skeleton : (

                                image?.url && (
                                    <>
                                        <button
                                            className="bg-saap-bg-dark-primary opacity-0 group-hover:opacity-100 transition-all duration-300 text-saap-text-dark-secondary absolute top-1 right-1 p-1 rounded-full"
                                            onClick={handleDeleteImage}
                                        >
                                            <ImCancelCircle size={20} />
                                        </button>
                                        <Image
                                            src={image.url}
                                            width={128}
                                            height={100}
                                            alt="Post image"
                                            className="rounded-lg"
                                            loading="lazy"
                                        />
                                    </>
                                )
                            )
                        }
                    </div>
                )
                }
            </div>
            <label htmlFor="imageUploader" className="w-5 cursor-pointer flex items-center justify-center h-5 ">
                <input
                    type="file"
                    name="imageUploader"
                    id="imageUploader"
                    className="w-[0.000001px]"
                    onChange={(e) => {
                        setFile(e.target.files?.[0]!);
                    }}
                />
                <IoImage size={25} />
            </label>

            <Divider className="my-2" />

            <div className='flex items-center justify-end gap-3 px-4'>
                <div>
                    <Button
                        color="danger"
                        variant="faded"
                        className="font-semibold rounded-full dark:bg-saap-bg-dark-secondary border-danger-300"
                        onClick={handleDiscard}
                    >
                        Discard
                    </Button>
                </div>
                <div>
                    <Button
                        className="font-semibold dark:bg-saap-bg-dark-secondary rounded-full text-saap-primary border-saap-primary  disabled:cursor-not-allowed flex items-center justify-center gap-1"
                        onClick={handlePost}
                        disabled={isPending}
                        variant="faded"
                    >
                        {isPending ? (
                            <PiSpinnerLight size={18} className="animate-spin" />
                        ) : null}
                        <span>Post</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PostForm
