"use client"
import { Avatar, Divider } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Skeleton = () => {
    return (
        <div className="animate-pulse space-y-1 w-full">
            <div className="rounded-full bg-default-200 dark:bg-saap-bg-dark-primary h-4 w-full"></div>
            <div className="rounded-full bg-default-200 dark:bg-saap-bg-dark-primary h-3 py-1 w-1/2"></div>
        </div>
    )
}

const Header = () => {
    const { data: session, status } = useSession()
    // console.log({ session, status });
    const username = session?.user.userName || `@${session?.user.id.slice(0, 10)}`

    return (
        <header className="space-y-4">
            <Link href={`/profile/${username}`}>
                <div className='flex items-start justify-start gap-2'>
                    <div>
                        <Avatar
                            src={session?.user?.image!}
                            size='md'
                            isBordered
                        >
                            {!session?.user?.image || <FaUser />}
                        </Avatar>
                    </div>
                    {status === "loading" ? (
                        <Skeleton />
                    ) : (
                        <>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-[16px] font-bold leading-5 text-saap-text-primary dark:text-saap-text-dark-primary'>{session?.user?.name}</h3>
                                <h5 className='text-sm font-semibold text-saap-text-secondary dark:text-saap-text-dark-secondary'>{username}</h5>
                            </div>
                        </>
                    )}
                </div>
            </Link>
            <div className='flex items-center justify-between'>
                <div className='space-x-1'>
                    <span className='font-bold'>0</span>
                    <span>post</span>
                </div>
                <Divider orientation="vertical" className='h-4 bg-gray-500' />
                <div className='space-x-1'>
                    <span className='font-bold'>0</span>
                    <span>following</span>
                </div>
                <Divider orientation="vertical" className='h-4 bg-gray-500' />
                <div className='space-x-1'>
                    <span className='font-bold'>0</span>
                    <span>followers</span>
                </div>
            </div>
            <Divider />
        </header>
    )
}

export default Header
