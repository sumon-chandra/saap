"use client"

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { subtitle } from "../primitives";
import { useDisclosure } from "@nextui-org/react";
import AuthForm from "../authForm/AuthForm";
import Footer from "./Footer";
import Header from "./Header";

export const LeftSidebar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();

     return (
          <>
               <aside className="sticky top-0 w-[250px] left-0 hidden sm:flex h-[100dvh] flex-col gap-10 p-4 bg-saap-bg-primary dark:bg-saap-bg-dark-secondary rounded-lg shadow-lg">
                    <div className="relative h-full">
                         <Header />
                         <nav className="flex flex-col gap-4">
                              {siteConfig.navItems.map(navItem => (
                                   <NextLink className={subtitle({ color: "primary" })} href={navItem.href} key={navItem.label}>
                                        {navItem.label}
                                   </NextLink>
                              ))}
                         </nav>
                         <Footer />
                    </div>
               </aside>
               {/* ======== Auth Form Modal ======== */}
               <AuthForm onClose={onClose} isOpen={isOpen} />
          </>
     );
};
