"use client"
import { Button, useDisclosure } from "@nextui-org/react"
import PostFormModal from "./post-form-modal/PostFormModal"

const HomepageHeader = () => {
   const { isOpen, onClose, onOpen } = useDisclosure()
   return (
      <>
         <div className="my-4 rounded py-5 flex items-center gap-6 justify-between">
            <div
               className="bg-saap-bg-primary dark:bg-saap-bg-dark-secondary w-full h-10 rounded-full flex items-center justify-start ps-4 cursor-pointer"
               onClick={onOpen}
            >
               Create a post
            </div>
            <Button
               className="font-semibold bg-saap-primary text-saap-text-primary border-none flex items-center justify-center gap-1 cursor-pointer"
               onClick={onOpen}
               variant="faded"
               radius="full"
            >
               Post
            </Button>
         </div>
         {/* ============== Post Form Modal ================== */}
         <PostFormModal isOpen={isOpen} onClose={onClose} />
      </>
   )
}

export default HomepageHeader
