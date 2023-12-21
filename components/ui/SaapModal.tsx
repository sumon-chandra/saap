"use client"
import { FC, ReactNode } from "react";
import { Modal, ModalContent } from "@nextui-org/react";

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
   isDismissable?: boolean;
   size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "xs" | "3xl" | "4xl" | "5xl" | undefined
}

const SaapModal: FC<ModalProps> = ({ isOpen, onClose, children, isDismissable, size }) => {
   return (
      <>
         <Modal
            backdrop="blur"
            isOpen={isOpen}
            onClose={onClose}
            isDismissable={isDismissable}
            size={size}
            placement="center"
            className='bg-saap-bg-primary dark:bg-saap-bg-dark-primary'
            motionProps={{
               variants: {
                  enter: {
                     y: 0,
                     opacity: 1,
                     transition: {
                        duration: 0.3,
                        ease: "easeOut",
                     },
                  },
                  exit: {
                     y: -20,
                     opacity: 0,
                     transition: {
                        duration: 0.2,
                        ease: "easeIn",
                     },
                  },
               }
            }}
         >
            <ModalContent>
               {() => (
                  <>
                     {children}
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   )
}

export default SaapModal
