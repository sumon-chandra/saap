import { FC } from 'react'
import { CardBody } from '@nextui-org/react'
import { Post } from '@prisma/client'
import Image from 'next/image'

interface PostBodyProps {
   post: Post
}

const PostBody: FC<PostBodyProps> = ({ post }) => {
   return (
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
   )
}

export default PostBody
