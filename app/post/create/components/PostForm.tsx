"use client"
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { IoImages } from "react-icons/io5";

const PostForm = () => {
    const handleDiscard = () => { };
    const handlePost = () => { };

    return (
        <div className='p-4 rounded bg-saap-bg-secondary dark:bg-saap-bg-dark-primary'>
            <div className='h-32 max-w-lg mx-auto'>
                <textarea
                    placeholder="What's in your mind?"
                    className="w-full h-full resize-none bg-saap-transparent focus:outline-none no-scrollbar text-saap-text-secondary dark:text-saap-text-dark-secondary"
                />
            </div>
            <div>
                <Tooltip content="Add image">
                    <Button
                        isIconOnly
                        radius="full"
                        className="bg-saap-transparent p-0 text-saap-primary hover:text-saap-secondary "
                    >
                        <IoImages size={20} />
                    </Button>
                </Tooltip>
            </div>
            <Divider className="my-2" />
            <div className='flex items-center justify-end px-4 gap-3'>
                <div>
                    <Button
                        color="danger"
                        className="font-semibold rounded-full"
                        onClick={handleDiscard}
                    >
                        Discard
                    </Button>
                </div>
                <div>
                    <Button
                        className="bg-saap-primary text-saap-bg-primary rounded-full font-semibold"
                        onClick={handlePost}
                    >
                        Post
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PostForm
