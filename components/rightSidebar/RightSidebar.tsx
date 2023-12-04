import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { FaUser } from "react-icons/fa";
const RightSidebar = () => {
     return (
          <aside className="sticky  top-0 w-[250px] right-0 hidden lg:flex h-[100dvh] flex-col gap-10 p-4 bg-white dark:bg-[#1F232E] rounded-lg shadow-lg">
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
                    {siteConfig.navItems.map(navItem => (
                         <NextLink href={navItem.href} key={navItem.label}>
                              {navItem.label}
                         </NextLink>
                    ))}
                    {siteConfig.navItems.map(navItem => (
                         <NextLink href={navItem.href} key={navItem.label}>
                              {navItem.label}
                         </NextLink>
                    ))}
               </nav>
          </aside>
     );
};

export default RightSidebar;
