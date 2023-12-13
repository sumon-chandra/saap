import { redirect } from "next/navigation"
import getLoggedUser from "../_actions/getLoggedUser"

interface AuthLayoutProps {
   children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
   const user = await getLoggedUser()
   if (user) redirect('/')
   console.log({ "Logged-user": user });


   return (
      <>
         <div className="bg-[#101010] h-screen">
            <div className="absolute z-50  -translate-x-2/4 -translate-y-2/4 sm:-translate-y-[40%] left-2/4 top-2/4 w-full px-4 sm:px-0">
               {children}
            </div>
         </div>
      </>
   )
}