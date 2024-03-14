"use client"

import Link from "next/link";
import { FC } from "react";
import { useSelectedLayoutSegment } from "next/navigation"
import clsx from "clsx";
import { IconType } from "react-icons";

interface NavItemProps {
    href: string;
    label: string;
    Icon: IconType;
}

const NavItem: FC<NavItemProps> = ({ href, label, Icon, }) => {
    const segment = useSelectedLayoutSegment()
    const active = segment === null ? href === '/' : href === `/${segment}`;
    // console.log({ href, active });

    return (
        <Link
            href={href}
            className={clsx(
                "group flex items-center justify-start gap-4 text-saap-text-primary dark:text-saap-text-dark-primary rounded-full py-2 px-3 hover:bg-saap-bg-secondary transition-all dark:hover:bg-saap-bg-dark-primary",
                active && "ring-2 ring-saap-secondary bg-saap-bg-primary-light text-saap-secondary hover:bg-saap-bg-primary-light dark:bg-saap-bg-dark-primary"
            )}
        >
            <span className="p-1 transition-all rounded-full group-hover:bg-saap-bg-primary dark:group-hover:bg-saap-bg-dark-secondary">
                <Icon size={20} />
            </span>
            <div className="text-[1rem] font-semibold">
                {label}
            </div>
        </Link>
    )
}

export default NavItem
