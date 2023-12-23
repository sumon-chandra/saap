import { CardHeader, User } from '@nextui-org/react'
import Link from 'next/link'
import PostDangerDropdown from './PostDangerDropdown'
import { FC } from 'react'
import { FullPostTypes } from '@/types'

interface PostHeaderProps {
   post: FullPostTypes
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
   return (
      <CardHeader>
         <div className="flex items-center justify-between w-full">
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
            <PostDangerDropdown />
         </div>
      </CardHeader>
   )
}

export default PostHeader
