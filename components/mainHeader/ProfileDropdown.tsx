"use client"
import {
   Avatar,
   Divider,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownTrigger,
   useDisclosure
} from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import ConfirmationModal from './ConfirmationModal'
import { FiSettings, FiUser } from 'react-icons/fi'
import { MdLogout } from 'react-icons/md'
import { ThemeSwitch } from '../theme-switch'

const ProfileDropdown = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { data: session, status } = useSession()
   // console.log("Auth status :", status);

   const username = session?.user.userName || session?.user.id.slice(0, 10)

   return (
      <>
         <Dropdown placement="bottom-start" className='bg-saap-bg-primary md:w-72 dark:bg-saap-bg-dark-primary'>
            <DropdownTrigger>
               <div className='inline-flex items-center justify-start gap-2 transition-transform cursor-pointer'>
                  <Avatar
                     as="button"
                     src={session?.user?.image!}
                     isBordered
                     name={session?.user?.name!}
                  />
                  <h5 className='hidden lg:block text-saap-text-primary dark:text-saap-text-dark-primary text-lg font-semibold'>
                     {session?.user?.name!}
                  </h5>
               </div>
            </DropdownTrigger>
            <DropdownMenu
               aria-label="User Actions"
               variant="solid"
               className='gap-3'
            >
               <DropdownItem
                  key="profile"
                  className="data-[hover=true]:bg-saap-transparent data-[hover=true]:shadow-none cursor-default"
               >
                  <p className="font-semibold text-sm pb-1">Signed in as</p>
                  <Divider />
                  <div>
                     <h5 className="text-lg font-semibold">{session?.user?.name!}</h5>
                     <p className="text-xs">{`@${username}`}</p>
                  </div>
               </DropdownItem>
               <DropdownItem
                  key="settings"
                  className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
               >
                  <div className='flex items-center gap-2'>
                     <FiUser size={20} />
                     <div>Profile</div>
                  </div>
               </DropdownItem>
               <DropdownItem
                  key="settings"
                  className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
               >
                  <div className='flex items-center gap-2'>
                     <FiSettings size={20} />
                     <div>Settings</div>
                  </div>
               </DropdownItem>
               <DropdownItem
                  key="switch-theme"
                  className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
               >
                  <ThemeSwitch>Switch theme</ThemeSwitch>
               </DropdownItem>
               <DropdownItem
                  key="logout"
                  onClick={onOpen}
                  className="bg-saap-danger text-saap-text-dark-primary data-[hover=true]:text-saap-text-dark-primary data-[hover=true]:bg-saap-danger"
               >
                  <div className='flex items-center gap-2'>
                     <MdLogout size={20} />
                     <div>Logout</div>
                  </div>
               </DropdownItem>
            </DropdownMenu>
         </Dropdown>
         {/* ======== Confirmation modal ========= */}
         <ConfirmationModal onClose={onClose} isOpen={isOpen} />
      </>
   )
}

export default ProfileDropdown
