"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { Post } from "@prisma/client"
import Image from "next/image"
import { FC } from "react"
interface PostProps {
    post: Post
}

const SinglePost: FC<PostProps> = ({ post }) => {
    return (
        <Card className="w-full dark:bg-saap-bg-dark-primary">
            <CardHeader>
            </CardHeader>
            <CardBody>
                <div className=" flex flex-col gap-4">
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
        </Card>
    )
}

export default SinglePost
