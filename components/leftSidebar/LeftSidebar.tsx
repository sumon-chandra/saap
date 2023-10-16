"use client"

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaUser } from "react-icons/fa";
import { subtitle } from "../primitives";
import {SlSettings} from "react-icons/Sl"
import {FiHelpCircle} from "react-icons/fi"
import {RxInfoCircled} from "react-icons/rx"
import {Divider} from "@nextui-org/react";

export const LeftSidebar = () => {
     return (
          <aside className="sticky top-2 w-[250px] left-0 hidden sm:flex h-[97.5vh] flex-col gap-10 p-4 bg-white dark:bg-[#1F232E] rounded-lg shadow-lg">
               <header className="flex items-center justify-start gap-1">
                    <div>
                         <FaUser />
                    </div>
                    <div>
                         <h3>Sumon Chandra</h3>
                    </div>
               </header>
               <nav className="flex flex-col gap-4">
                    {siteConfig.navItems.map(navItem => (
                         <NextLink className={subtitle({color: "primary"})} href={navItem.href} key={navItem.label}>
                              {navItem.label}
                         </NextLink>
                    ))}
               </nav>
               <div className="flex items-center justify-between">
                    <ThemeSwitch  />
                    <Divider orientation="vertical" />
                    <SlSettings className="text-xl" />
                    <Divider orientation="vertical" />
                    <FiHelpCircle className="text-xl"  />
                    <Divider orientation="vertical" />
                    <RxInfoCircled className="text-xl" />
               </div>
          </aside>
     );
};
