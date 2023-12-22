"use client"
import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from "react";
import { Divider } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { useEdgeStore } from "@/lib/edgestore";
import useAutosizeTextArea from "@/hooks/useAutosizeTextarea";
import SaapModal from "@/components/ui/SaapModal";
import PostFormHeader from "./PostFormHeader";
import PostImage from "./PostImage";
import InsertImageBtn from "./InsertImageBtn";
import PostBtn from "./PostBtn";
import PostTextarea from "./PostTextarea";


export interface PostProps {
   body?: string;
   image?: string;
}

interface EdgeStoreImageProps {
   url: string;
   size: number;
   uploadedAt: Date;
   metadata: Record<string, never>;
   path: Record<string, never>;
   pathOrder: string[];
}

interface PostFormModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const PostFormModal: FC<PostFormModalProps> = ({ isOpen, onClose }) => {
   const [imageLoading, setImageLoading] = useState<boolean>(false)
   const [file, setFile] = useState<File | null>(null);
   const [image, setImage] = useState<EdgeStoreImageProps | null>(null)
   const [imageContainerVisible, setImageContainerVisible] = useState(false)
   const { edgestore } = useEdgeStore();
   const [post, setPost] = useState<PostProps | null>({
      body: "",
      image: "",
   })

   // Autosize Textarea
   const textareaRef = useRef<HTMLTextAreaElement>(null)
   useAutosizeTextArea(textareaRef.current, post?.body!)

   // handle textarea changes
   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPost((prevPost) => {
         return { ...prevPost, body: e.target.value }
      })
   };

   // Handle post with @tenstack/react-query
   const {
      data,
      error,
      isPending,
      isError,
      isSuccess,
      mutate
   } = useMutation({
      mutationFn: (newPost: PostProps) => {
         return axios.post("/api/post", newPost)
      }
   })

   // POST handler - using useMutation()
   const handlePost = () => {
      if (post) {
         mutate(post)
         console.log({ post });
      } else {
         toast.error("Post is can't be empty!!")
      }
   }

   // Display toast messages based on the POST event
   useEffect(() => {
      if (isSuccess) {
         toast.success(<div className="text-[16px]">Post created successfully!</div>)
         setPost(null)
         setFile(null)
         setImage(null)
         setImageContainerVisible(false)
         onClose() // Close the modal window
      }
      if (isError) {
         console.log(isError);
         toast.error(<div className="text-[16px]">Something went wrong, please try again!!</div>)
         console.log(error);
      }
   }, [error, isError, isSuccess, onClose])

   // Store image on Edge Store 
   useEffect(() => {
      setImage(null)
      const handleImageUpload = async () => {
         setImageContainerVisible(true)

         if (file) {
            const res = await edgestore.publicFiles.upload({
               file,
               onProgressChange: (progress) => {
                  setImageLoading(true)
                  // console.log(progress);
               },
            });
            setImageLoading(false)
            setImage(res)
            setPost((previous) => {
               return {
                  ...previous,
                  image: res?.url!
               }
            })
         }
      }

      handleImageUpload()
      setFile(null)
   }, [edgestore, file,])

   // Delete image handler
   const handleDeleteImage = useCallback(() => {
      setImageContainerVisible(false)
      async function deleteImage() {
         if (image?.url) {
            await edgestore.publicFiles.delete({
               url: image.url,
            });
         }
         setImage(null)
      }
      deleteImage()
   }, [edgestore, image?.url])

   return (
      <SaapModal
         isOpen={isOpen}
         onClose={onClose}
         isDismissable={false}
         size="2xl"
      >
         <div className='p-6'>
            <PostFormHeader />
            <PostTextarea
               disabled={isPending}
               onChange={handleOnChange}
               value={post?.body!}
            />

            <PostImage
               imageUrl={image?.url!}
               isImageLoading={imageLoading}
               isVisible={imageContainerVisible}
               onImageDelete={handleDeleteImage}
            />

            <Divider className="my-2" />

            <div className='flex items-center justify-between'>
               <InsertImageBtn setFile={setFile} isLoading={imageLoading} />
               <PostBtn handlePost={handlePost} isPending={isPending} />
            </div>
         </div>
      </SaapModal>
   )
}

export default PostFormModal
