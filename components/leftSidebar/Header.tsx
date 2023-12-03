"use client"
import { Avatar, Divider } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { data: session, status } = useSession()
    console.log({ session, status });

    return (
        <header className="space-y-4">
            <Link href="/profile/username">
                <div className='flex items-start justify-start gap-2'>
                    <div>
                        <Avatar
                            src={session?.user?.image!}
                            size='md'
                        >
                            {!session?.user?.image || <FaUser />}
                        </Avatar>
                    </div>
                    <div className='flex flex-col items-start '>
                        <h3 className='text-lg font-semibold leading-5'>{session?.user?.name}</h3>
                        {session?.user?.userName && <h5 className='text-sm'>@username</h5>}
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
