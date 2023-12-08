"use client"
import { FaHome, FaUser, FaHashtag, FaBookmark } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import NavItem from "./NavItem"
import { useSession } from "next-auth/react"

const Skeleton = ({ key }: { key: string }) => {
    return (
        <div key={key} className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-default-200 dark:bg-saap-bg-dark-primary py-6 w-full"></div>
        </div>
    )
}

const NavList = () => {
    const { status, data } = useSession()
    const navItems = [
        {
            label: "Home",
            href: "/",
            icon: FaHome
        },
        {
            label: "Profile",
            href: `/profile/${data?.user?.userName ? data?.user?.userName : data?.user?.id}`,
            icon: FaUser
        },
        {
            label: "Topics",
            href: "/topics",
            icon: FaHashtag
        },
        {
            label: "Saved",
            href: "/saved",
            icon: FaBookmark
        },
        {
            label: "Invite Friends",
            href: "/invite-friends",
            icon: TbMail
        }
    ]

    return (
        <nav className="flex flex-col gap-4 p-4">
            {status === "loading" ? (
                navItems.map(item => (
                    <Skeleton key={item.label} />
                ))
            ) : navItems.map(item => (
                <NavItem
                    key={item.label}
                    Icon={item.icon}
                    label={item.label}
                    href={item.href}
                />
            ))}
        </nav>
    )
}

export default NavList
