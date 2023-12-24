import { FC, useState } from 'react'
import { CardBody } from '@nextui-org/react'
import { Post } from '@prisma/client'
import Image from 'next/image'

interface PostContentProps {
   post: Post
}

const PostContent: FC<PostContentProps> = ({ post }) => {
   const [showFullBody, setShowFullBody] = useState(false)

   const isPostBodyLarge = post.body.length >= 200
   const slicedPostBody = post?.body.slice(0, 200)

   const seeLessOrMoreButton = () => {
      if (showFullBody) {
         return (
            <span
               className='font-semibold text-default-500 cursor-pointer ms-2'
               onClick={() => setShowFullBody(false)}
            >
               ...see less
            </span>
         )
      } else {
         return (
            <span
               className='font-semibold text-default-500 cursor-pointer ms-2'
               onClick={() => setShowFullBody(true)}
            >
               ...see more
            </span>
         )
      }
   }

   return (
      <CardBody>
         <div className="flex flex-col gap-4">
            <div>
               <div>
                  {isPostBodyLarge ? (
                     <>
                        <span>
                           {showFullBody ? post.body : slicedPostBody}
                        </span>
                        {seeLessOrMoreButton()}
                     </>
                  ) : post.body}
               </div>
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
   )
}

export default PostContent
