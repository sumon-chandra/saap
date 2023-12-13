import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/options"
import prisma from "@/lib/prismadb"

const getLoggedUser = async () => {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user.email) return null;
        const loggedUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        })
        if (!loggedUser) return null;
        return loggedUser
    } catch (error: any) {
        return null
    }
}
export default getLoggedUser