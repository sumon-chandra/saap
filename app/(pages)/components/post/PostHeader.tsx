import { CardHeader, User } from '@nextui-org/react'
import PostDangerDropdown from './PostDangerDropdown'
import { FC } from 'react'
import { FullPostTypes } from '@/types'
import { postTimeFormate } from '@/utils/postTimeFormate'

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
                  <p className='text-xs'>{postTimeFormate(post.createdAt!)}</p>
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
