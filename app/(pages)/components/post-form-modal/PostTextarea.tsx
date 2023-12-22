import { Textarea } from "@nextui-org/react";
import { ChangeEvent, FC } from "react"

interface PostTextareaProps {
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   value: string;
   disabled: boolean;
}

const PostTextarea: FC<PostTextareaProps> = ({ disabled, onChange, value }) => {
   return (
      <Textarea
         onChange={(e) => onChange(e)}
         value={value}
         placeholder="Create a new post..."
         disabled={disabled}
         disableAnimation
         autoFocus
         minRows={10}
         classNames={{
            input: "bg-saap-transparent no-scrollbar",
            inputWrapper: "pt-4 bg-saap-transparent data-[hover=true]:bg-saap-transparent group-data-[focus=true]:bg-saap-transparent group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
         }}
      />
   )
}

export default PostTextarea
