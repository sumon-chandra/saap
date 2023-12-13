import { ReactNode } from "react"

const HomeLayout = ({ children }: { children: ReactNode }) => {
   return (
      <main className="mx-auto w-full md:w-3/4 lg:w-1/2">
         {children}
      </main>
   )
}

export default HomeLayout
