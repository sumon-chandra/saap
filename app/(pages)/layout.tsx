import MainHeader from "@/components/mainHeader/MainHeader"
import { ReactNode } from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
   return (
      <main className="mx-auto w-full md:w-3/4 lg:w-1/2">
         <MainHeader />
         <main className="lg:px-0 px-4">
            {children}
         </main>
      </main>
   )
}

export default HomeLayout
