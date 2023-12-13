import { Dispatch, FC, SetStateAction } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { ImWarning } from "react-icons/im";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const ConfirmationModal: FC<ModalProps> = ({ isOpen, onClose }) => {
   const router = useRouter()
   const handleLogout = () => {
      signOut({ redirect: false }).then(() => {
         router.push('/login');
      })
      onClose();
   }
   return (
      <Modal
         backdrop="blur"
         isOpen={isOpen}
         onClose={onClose}
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
                  <ModalHeader className="flex gap-2 items-center text-warning-500">
                     <ImWarning />
                     <div>Are you sure?</div>
                  </ModalHeader>
                  <ModalFooter>
                     <Button color="danger" variant="light" onPress={onClose}>
                        Cancel
                     </Button>
                     <Button color="primary" onPress={handleLogout}>
                        Logout
                     </Button>
                  </ModalFooter>
               </>
            )}
         </ModalContent>
      </Modal>

   )
}

export default ConfirmationModal
