import { CardHeader, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import PostDangerDropdown from './PostDangerDropdown'
import { FC } from 'react'
import { FullPostTypes } from '@/types'
import { postTimeFormate } from '@/utils/postTimeFormate'
import UserProfileCard from './UserProfileCard'

interface PostHeaderProps {
   post: FullPostTypes
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {

   return (
      <CardHeader>
         <div className="flex items-center justify-between w-full">
            <Popover placement="bottom">
               <PopoverTrigger>
                  <User
                     name={post.user.name}
                     description={(
                        <p className='text-xs'>{postTimeFormate(post.createdAt!)}</p>
                     )}
                     avatarProps={{
                        src: post.user.image!
                     }}
                  />
               </PopoverTrigger>
               <PopoverContent>
                  <UserProfileCard post={post} />
               </PopoverContent>
            </Popover>
            <PostDangerDropdown />
         </div>
      </CardHeader>
   )
}

export default PostHeader
