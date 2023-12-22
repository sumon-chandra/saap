"use client"
import { Avatar } from "@nextui-org/react"
import { useSession } from "next-auth/react"

const PostFormHeader = () => {
   const { data: session } = useSession()
   return (
      <div className="flex gap-3 item-center">
         <Avatar
            as="button"
            src={session?.user?.image!}
            isBordered
            name={session?.user?.name!}
         />
         <h5 className='text-saap-text-primary dark:text-saap-text-dark-primary text-lg font-semibold'>
            {session?.user?.name!}
         </h5>
      </div>
   )
}

export default PostFormHeader
