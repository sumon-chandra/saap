import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { FaUser } from "react-icons/fa";

export const LeftSidebar = () => {
     return (
          <aside className="sticky top-2 w-[250px] left-0 hidden sm:flex h-[97.5vh] flex-col gap-10 p-4 bg-white rounded-lg shadow-lg">
               <header className="flex items-center justify-start gap-1">
                    <div>
                         <FaUser />
                    </div>
                    <div>
                         <h3>Sumon Chandra</h3>
                    </div>
               </header>
               <nav className="flex flex-col gap-4">
                    {siteConfig.navItems.map(navItem => (
                         <NextLink href={navItem.href} key={navItem.label}>
                              {navItem.label}
                         </NextLink>
                    ))}
               </nav>
          </aside>
     );
};
