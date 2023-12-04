"use client"

import { useDisclosure } from "@nextui-org/react";
import AuthForm from "../authForm/AuthForm";
import Footer from "./Footer";
import Header from "./Header";
import NavList from "./nav/NavList";

export const LeftSidebar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();

     return (
          <>
               <aside className="sticky top-0 w-[250px] left-0 hidden sm:flex h-[100dvh] flex-col gap-10 p-4 bg-saap-bg-primary dark:bg-saap-bg-dark-secondary rounded-lg shadow-lg">
                    <div className="relative h-full">
                         <Header />
                         <NavList />
                         <Footer />
                    </div>
               </aside>
               {/* ======== Auth Form Modal ======== */}
               <AuthForm onClose={onClose} isOpen={isOpen} />
          </>
     );
};
