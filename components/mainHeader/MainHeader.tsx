"use client"

import { Button } from "@nextui-org/react";
import { RiNotification2Line, RiSearch2Line } from "react-icons/ri";
import HeaderIcon from "./HeaderIcon";


const MainHeader = () => {
    const handleSearch = () => { }
    const handleNotification = () => { }

    return (
        <header className="sticky top-0 bg-saap-bg-primary dark:bg-saap-bg-dark-secondary rounded-b-md">
            <div className="flex justify-between py-3">
                <div className="flex-1" />
                <div className="flex-1 select-none">
                    <h2 className="text-3xl font-bold text-center text-saap-primary">Saap.</h2>
                </div>
                <div className="flex items-center justify-end flex-1 gap-3 mr-4">
                    <div>
                        <HeaderIcon
                            Icon={RiSearch2Line}
                            iconSize={20}
                            onClick={handleSearch}
                        />
                    </div>
                    <div>
                        <HeaderIcon
                            Icon={RiNotification2Line}
                            iconSize={20}
                            onClick={handleNotification}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
