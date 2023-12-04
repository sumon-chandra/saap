import { siteConfig } from "@/config/site"
import NavItem from "./NavItem"

const NavList = () => {
    return (
        <nav className="flex flex-col gap-4 p-4">
            {siteConfig.navItems.map(navItem => (
                <NavItem
                    key={navItem.label}
                    href={navItem.href}
                    label={navItem.label}
                    Icon={navItem.icon}
                />
            ))}
        </nav>
    )
}

export default NavList
