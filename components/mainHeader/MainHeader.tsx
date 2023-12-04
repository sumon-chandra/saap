"use client"

import { Button } from "@nextui-org/react";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";


const MainHeader = () => {
    return (
        <header className="sticky top-0 dark:bg-[#1F232E] bg-white rounded-b-md">
            <div className="flex justify-between py-3">
                <div className="flex-1" />
                <div className="flex-1 select-none">
                    <h2 className="text-2xl font-bold text-center text-saap-primary">SAAP</h2>
                </div>
                <div className="flex items-center justify-end flex-1 gap-3">
                    <div>
                        <Button
                            variant="light"
                            isIconOnly
                            radius="full"
                        >
                            <RiSearch2Line size={20} />
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="light"
                            isIconOnly
                            radius="full"
                        >
                            <RiNotification2Line size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
