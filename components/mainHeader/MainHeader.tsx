"use client"

import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import HeaderIcon from "./HeaderIcon";
import { useRouter } from "next/navigation";


const MainHeader = () => {
    const router = useRouter()
    const handleSearch = () => { }
    const handleNotification = () => { }
    const handleCreatePost = () => {
        router.push("/post/create")
    }

    return (
        <header className="sticky top-0 bg-saap-bg-primary dark:bg-saap-bg-dark-secondary rounded-b-md z-[999]">
            <div className="flex justify-between py-3">
                <div className="flex-1" />
                <div className="flex-1 select-none">
                    <h2 className="text-3xl font-bold text-center text-saap-primary">Saap.</h2>
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
