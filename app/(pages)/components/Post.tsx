"use client"
import Image from "next/image"
import { Card, CardBody, CardFooter, CardHeader, Divider, User } from "@nextui-org/react"
import { FC, useState } from "react"
import { FaHeart, FaRegHeart, FaComment, FaRegComment, FaShareSquare } from "react-icons/fa";
import clsx from "clsx"
import Link from "next/link"
import { FullPostTypes } from "@/types"

interface PostProps {
    post: FullPostTypes
}

const SinglePost: FC<PostProps> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(true)
    const [isCommented, setIsCommented] = useState(false)

    const like = 2
    const comment = 12
    const share = 12

    return (
        <Card
            className="w-full shadow-none rounded  bg-saap-bg-primary dark:bg-saap-bg-dark-secondary"
        >
            <CardHeader>
                <div>
                    <User
                        name={post.user.name}
                        description={(
                            <Link href="#">
                                {post.user.userName}
                            </Link>
                        )}
                        avatarProps={{
                            src: post.user.image!
                        }}
                    />
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-4">
                    <div>
                        <p>{post.body}</p>
                    </div>
                    <div>
                        {post.image && (
                            <Image
                                alt={post.userId}
                                src={post.image as string}
                                width={200}
                                height={200}
                            />
                        )}
                    </div>

                </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex items-center justify-start gap-6">
                <div
                    className={clsx("flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer",
                        isLiked && "bg-saap-bg-primary-light text-saap-secondary dark:bg-saap-bg-dark-primary"
                    )}
                >
                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                    {like > 0 && <div>{like}</div>}
                </div>
                <div
                    className={clsx("flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer",
                        isCommented && "bg-saap-bg-primary-light text-saap-secondary dark:bg-saap-bg-dark-primary"
                    )}
                >
                    {isCommented ? <FaComment /> : <FaRegComment />}
                    {comment > 0 && <div>{comment}</div>}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer">
                    <FaShareSquare />
                    {share > 0 && <div>{share}</div>}
                </div>
            </CardFooter>
        </Card>
    )
}

export default SinglePost
