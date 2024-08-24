import { Textarea } from "@nextui-org/react";
import { FC } from "react";
import { PostTextareaProps } from "@/src/types";
import { useFormContext } from "react-hook-form";

const PostTextarea: FC<PostTextareaProps> = ({ disabled, value, minRow }) => {
  const { register } = useFormContext();
  return (
    <Textarea
      placeholder="What's in your mind?"
      defaultValue=""
      disabled={disabled}
      disableAnimation
      autoFocus
      minRows={minRow}
      {...register("body")}
      classNames={{
        input: "bg-saap-transparent no-scrollbar",
        inputWrapper:
          "pt-4 bg-saap-transparent data-[hover=true]:bg-saap-transparent group-data-[focus=true]:bg-saap-transparent group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
      }}
    />
  );
};

export default PostTextarea;
