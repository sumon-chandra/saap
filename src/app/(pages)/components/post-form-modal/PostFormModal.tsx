"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Divider } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useEdgeStore } from "../../../../lib/edgestore";
import useAutosizeTextArea from "../../../../hooks/useAutosizeTextarea";
import SaapModal from "../../../../components/ui/SaapModal";
import PostFormHeader from "./PostFormHeader";
import InsertImageBtn from "./InsertImageBtn";
import PostTextarea from "./PostTextarea";
import { PostsRefetchStoreType } from "@/src/types";
import { useRefetchPosts } from "@/src/store/posts-store";
import SaapButton from "@/src/components/ui/SaapButton";
import Image from "next/image";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export interface PostProps {
  body?: string;
  image?: string;
}

interface FormData {
  body?: string;
  image?: FileList;
}

interface PostFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostFormModal: FC<PostFormModalProps> = ({ isOpen, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [post, setPost] = useState<PostProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { edgestore } = useEdgeStore();

  const setRefetchPosts = useRefetchPosts(
    (state: PostsRefetchStoreType) => state.setRefetchPosts
  );

  // Autosize Textarea
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textareaRef.current, post?.body!);

  // Handle post with @tenstack/react-query
  const { error, isPending, isError, isSuccess, mutate } = useMutation({
    mutationFn: (newPost: PostProps) => {
      return axios.post("/api/post", newPost);
    },
  });

  // useForm()
  const methods = useForm();

  // OnSubmit function called
  const handleFormSubmit: SubmitHandler<FormData> = async (data) => {
    let newPost: PostProps = {};

    // Set image
    if (data?.image?.length! > 0) {
      // Upload Post image
      const res = await edgestore.publicFiles.upload({
        onProgressChange: () => {
          setIsLoading(true);
        },
        file: data.image![0],
      });

      if (res.url) {
        newPost.image = res.url;
      }
    }

    // Set body
    if (data?.body) {
      newPost.body = data.body;
    }

    // Create new post
    if (newPost.body || newPost.image) {
      setIsLoading(false);
      setPost(newPost);
      await mutate(newPost);
    } else {
      console.log("Post not found!");
      toast.error("Post is can't be empty!!");
    }
  };

  // Display toast messages based on the POST event
  useEffect(() => {
    if (isSuccess) {
      toast.success("Post created successfully!");
      methods.reset();
      setFile(null);
      setPost(null);
      onClose(); // Close the modal window
      setRefetchPosts(true);
      setIsLoading(false);
    }
    if (isError) {
      toast.error("Something went wrong, please try again!!");
      setIsLoading(false);
      console.log(error);
    }
  }, [error, isError, isSuccess, onClose]);

  // Clear or reset input fields
  useEffect(() => {
    setPost(null);
    methods.reset();
    setFile(null);
    setIsLoading(false);
  }, [onClose]);

  return (
    <SaapModal
      isOpen={isOpen}
      onClose={onClose}
      isDismissable={false}
      size="2xl"
    >
      <div className="p-6">
        <PostFormHeader />

        {/* Post Form */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <PostTextarea disabled={isPending || isLoading} minRow={4} />

            {file && (
              <Image
                src={URL.createObjectURL(file)}
                width={200}
                height={100}
                alt="Post image"
                className="rounded-lg bg-saap-secondary"
                loading="lazy"
              />
            )}

            <Divider className="my-2" />

            <div className="flex items-center justify-between">
              <InsertImageBtn setFile={setFile} />
              <SaapButton
                variant="action"
                value="Post"
                isLoading={isPending || isLoading}
                type="submit"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </SaapModal>
  );
};

export default PostFormModal;
