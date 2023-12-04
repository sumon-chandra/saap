"use client"
import { Avatar, Divider } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { data: session, status } = useSession()
    console.log({ session, status });
    const username = session?.user.userName || session?.user.id.slice(0, 10)

    return (
        <header className="space-y-4">
            <Link href="/profile/username">
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
                    <div className='flex flex-col items-start '>
                        <h3 className='text-[16px] font-bold leading-5'>{session?.user?.name}</h3>
                        <h5 className='text-sm font-semibold text-gray-500'>@{username}</h5>
                    </div>
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
