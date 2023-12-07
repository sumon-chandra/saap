import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const ProfileLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default ProfileLayout
