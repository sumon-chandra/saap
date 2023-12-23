"use client"
import { FC, useState } from "react"
import { FullPostTypes } from "@/types"
import { CardFooter } from "@nextui-org/react"
import clsx from "clsx"
import { FaHeart, FaRegHeart, FaComment, FaRegComment, FaShareSquare, FaBookmark, FaRegBookmark } from "react-icons/fa";

interface PostFooterProps {
   post: FullPostTypes
}

const PostFooter: FC<PostFooterProps> = ({ post }) => {
   const [isLiked, setIsLiked] = useState(true)
   const [isCommented, setIsCommented] = useState(false)
   const [isSaved, setIsSaved] = useState(false)

   const like = 2
   const comment = 12
   const share = 12

   return (
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
         <div
            className={clsx("cursor-pointer p-1 rounded-full",
               isSaved && "text-saap-primary"
            )}
         >
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
         </div>
         <div className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer">
            <FaShareSquare />
            {share > 0 && <div>{share}</div>}
         </div>
      </CardFooter>
   )
}

export default PostFooter
