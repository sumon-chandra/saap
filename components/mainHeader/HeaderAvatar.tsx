import { Avatar } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

const HeaderAvatar = () => {
  const { data: session } = useSession()
  const username = session?.user.userName || session?.user.id.slice(0, 10)

  return (
    <Link href={`/${username}`}>
      <Avatar
        src={session?.user?.image!}
        size='md'
        isBordered
        className="bg-saap-bg-secondary dark:bg-saap-bg-dark-secondary text-saap-text-dark-secondary cursor-pointer select-none"
      >
        {!session?.user?.image || <FaUser />}
      </Avatar>
    </Link>
  )
}

export default HeaderAvatar
