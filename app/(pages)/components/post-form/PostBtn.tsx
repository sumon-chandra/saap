import { Button } from "@nextui-org/react"
import { FC } from "react"
import { PiSpinnerLight } from "react-icons/pi"

interface PostBtnProps {
   isPending: boolean
   handlePost: () => void
}

const PostBtn: FC<PostBtnProps> = ({ handlePost, isPending }) => {
   return (
      <Button
         className="font-semibold bg-saap-primary text-saap-text-primary border-none disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-1"
         onClick={handlePost}
         disabled={isPending}
         variant="faded"
         radius="full"
      >
         {isPending ? (
            <PiSpinnerLight size={18} className="animate-spin" />
         ) : null}
         <span>Post</span>
      </Button>
   )
}

export default PostBtn
