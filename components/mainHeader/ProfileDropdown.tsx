"use client"
import { useState } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User, useDisclosure } from '@nextui-org/react'
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
         <Dropdown placement="bottom-start" className='bg-saap-bg-primary dark:bg-saap-bg-dark-primary'>
            <DropdownTrigger>
               <User
                  as="button"
                  avatarProps={{
                     isBordered: true,
                     src: session?.user?.image!
                  }}
                  className="transition-transform"
                  description={`@${username}`}
                  name={session?.user?.name}
               />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="solid" className='gap-3'>
               <DropdownItem key="profile" className="data-[hover=true]:bg-saap-transparent data-[hover=true]:shadow-none cursor-default">
                  <p className="font-bold text-lg">Signed in as</p>
                  <p className="font-xs">{`@${username}`}</p>
               </DropdownItem>
               <DropdownItem key="settings" className="data-[hover=true]:bg-saap-bg-secondary">
                  <div className='flex items-center gap-2'>
                     <FiUser size={20} />
                     <div>Profile</div>
                  </div>
               </DropdownItem>
               <DropdownItem key="settings" className="data-[hover=true]:bg-saap-bg-secondary">
                  <div className='flex items-center gap-2'>
                     <FiSettings size={20} />
                     <div>Settings</div>
                  </div>
               </DropdownItem>
               <DropdownItem key="switch-theme" className="data-[hover=true]:bg-saap-bg-secondary">
                  <ThemeSwitch>Switch theme</ThemeSwitch>
               </DropdownItem>
               <DropdownItem key="logout" onClick={onOpen} className="bg-danger-500 data-[hover=true]:bg-danger-500">
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
