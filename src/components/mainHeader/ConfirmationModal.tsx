import { FC } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button } from "@nextui-org/react";
import { ImWarning } from "react-icons/im";
import { signOut } from "next-auth/react";
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'; // This useRouter will helps us to display the progress bar on the top.;
import SaapModal from "../ui/SaapModal";

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
      <SaapModal isOpen={isOpen} onClose={onClose}>
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
      </SaapModal>

   )
}

export default ConfirmationModal
