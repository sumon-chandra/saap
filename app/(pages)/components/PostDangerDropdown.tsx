import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { MdReportGmailerrorred, MdNotInterested } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const PostDangerDropdown = () => {
   return (
      <Dropdown className='bg-saap-bg-primary md:w-72 dark:bg-saap-bg-dark-primary'>
         <DropdownTrigger>
            <div className="cursor-pointer hover:bg-saap-bg-secondary hover:dark:bg-saap-bg-dark-primary p-2 rounded-full">
               <BsThreeDots />
            </div>
         </DropdownTrigger>
         <DropdownMenu>
            <DropdownItem
               className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
               key="not-interested"
            >
               <div className="flex items-center gap-2 justify-start">
                  <MdNotInterested />
                  <span>Not interested</span>
               </div>
            </DropdownItem>
            <DropdownItem
               className="data-[hover=true]:bg-saap-bg-secondary data-[hover=true]:dark:bg-saap-bg-dark-secondary"
               key="report"
            >
               <div className="flex items-center gap-2 justify-start text-saap-danger">
                  <MdReportGmailerrorred />
                  <span>Report</span>
               </div>
            </DropdownItem>
         </DropdownMenu>
      </Dropdown>
   )
}

export default PostDangerDropdown
