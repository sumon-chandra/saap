"use client"

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { FaUser } from "react-icons/fa";
import { subtitle } from "../primitives";
import { Button, useDisclosure } from "@nextui-org/react";
import AuthForm from "../authForm/AuthForm";
import { useSession } from "next-auth/react";
import Footer from "./Footer";

export const LeftSidebar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { data } = useSession()

     return (
          <>
               <aside className="sticky top-2 w-[250px] left-0 hidden sm:flex h-[97.5dvh] flex-col gap-10 p-4 bg-white dark:bg-[#1F232E] rounded-lg shadow-lg">
                    <div className="relative h-full">
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
                                   <NextLink className={subtitle({ color: "primary" })} href={navItem.href} key={navItem.label}>
                                        {navItem.label}
                                   </NextLink>
                              ))}
                              {/* {!data?.user?.email && (
                                   <Button
                                        type="button"
                                        variant="flat"
                                        onPress={() => onOpen()}
                                        className={subtitle({ color: "primary" })}
                                   >
                                        Login
                                   </Button>
                              )} */}
                         </nav>
                         <Footer />
                    </div>
               </aside>
               {/* ======== Auth Form Modal ======== */}
               <AuthForm onClose={onClose} isOpen={isOpen} />
          </>
     );
};
