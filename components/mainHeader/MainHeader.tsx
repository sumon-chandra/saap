"use client"

import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import HeaderIcon from "./HeaderIcon";
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'; // This useRouter will helps us to display the progress bar on the top.;
import ProfileDropdown from "./ProfileDropdown";
import Link from "next/link";
import { useDisclosure } from "@nextui-org/react";
import PostFormModal from "@/app/(pages)/components/post-form/PostFormModal";


const MainHeader = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSearch = () => { }
    const handleNotification = () => { }
    const handleCreatePost = () => {
        // router.push("/post/create")
        onOpen()
    }

    return (
        <header className="sticky top-0 bg-saap-bg-primary dark:bg-saap-bg-dark-secondary rounded-b-md z-[999]">
            <div className="flex justify-between py-3 mx-auto">
                <div className="flex-1 ps-4">
                    <ProfileDropdown />
                </div>
                <div className="flex-1 select-none">
                    <div className="flex items-center justify-center">
                        <div className="inline text-3xl font-bold text-center text-saap-primary cursor-pointer">
                            <Link href="/">Saap.</Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end flex-1 gap-3 mr-4">
                    <div>
                        <HeaderIcon
                            Icon={IoCreateOutline}
                            iconSize={20}
                            onClick={handleCreatePost}
                            tooltipContent="Create post"
                        />
                    </div>
                    {/* ============== Post Form Modal ================== */}
                    <PostFormModal isOpen={isOpen} onClose={onClose} />
                    <div>
                        <HeaderIcon
                            Icon={RiSearch2Line}
                            iconSize={20}
                            onClick={handleSearch}
                            tooltipContent="Search"
                        />
                    </div>
                    <div>
                        <HeaderIcon
                            Icon={RiNotification2Line}
                            iconSize={20}
                            onClick={handleNotification}
                            tooltipContent="Notification"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
