"use client"
import { Card, CardBody, CardFooter, CardHeader, Divider, User } from "@nextui-org/react"
import { FC, useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { FullPostTypes } from "@/types"
import PostBody from "./PostBody"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

interface PostProps {
    post: FullPostTypes
}

const SinglePost: FC<PostProps> = ({ post }) => {

    return (
        <Card
            className="w-full shadow-none rounded  bg-saap-bg-primary dark:bg-saap-bg-dark-secondary"
        >
            <PostHeader post={post} />
            <PostBody post={post} />
            <Divider />
            <PostFooter post={post} />
        </Card>
    )
}

export default SinglePost
