"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { Post } from "@prisma/client";
import SaapModal from "@/src/components/ui/SaapModal";
import PostTextarea from "../post-form-modal/PostTextarea";
import { PostProps } from "../post-form-modal/PostFormModal";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import SaapButton from "@/src/components/ui/SaapButton";
import { Divider } from "@nextui-org/react";
import useEditPost from "@/src/hooks/useEditPost";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

const PostEditModal: FC<Props> = ({ isOpen, onClose, post: defaultPost }) => {
  const [post, setPost] = useState<PostProps | null>({
    body: defaultPost?.body,
    image: defaultPost?.image || "",
  });

  const {
    data: editPostResponse,
    mutate,
    isSuccess,
    isError,
    error,
    isPending,
  } = useEditPost(defaultPost?.id);

  // handle textarea changes
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost((prevPost) => {
      return { ...prevPost, body: e.target.value };
    });
  };

  const handleRemoveImage = () => {};

  const handleEditPost = () => {
    mutate(post!);
  };

  // Display toast messages based on the Update event
  useEffect(() => {
    if (isSuccess) {
      toast.success(<div className="text-[16px]">Post updated !</div>);
      setPost(null);
      onClose(); // Close the modal window
    }
    if (isError) {
      console.log(isError);
      toast.error(
        <div className="text-[16px]">
          Something went wrong, please try again!!
        </div>
      );
      console.log(error);
    }
  }, [error, isError, isSuccess, onClose]);

  return (
    <SaapModal
      isOpen={isOpen}
      onClose={onClose}
      isDismissable={false}
      size="lg"
    >
      <div className="p-6">
        <PostTextarea defaultValue={post!} minRow={3} />
        {defaultPost.image && (
          <div className="relative overflow-hidden rounded drop-shadow-xl w-fit my-2.5 cursor-pointer">
            <Image
              loading="lazy"
              src={defaultPost.image}
              width={630}
              height={630}
              alt="Will add alt-text soon!"
              className="object-contain max-h-[520px] rounded-md"
            />
            <span
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 bg-saap-bg-dark-primary text-2xl p-2 rounded-full"
            >
              <MdClose />
            </span>
          </div>
        )}
        <div className="mt-3">
          <Divider />
          <div className="mt-1 flex items-center justify-end gap-4">
            <SaapButton value="Discard" variant="default" onClick={onClose} />
            <SaapButton
              value="Update"
              variant="action"
              isLoading={isPending}
              onClick={handleEditPost}
            />
          </div>
        </div>
      </div>
    </SaapModal>
  );
};

export default PostEditModal;
