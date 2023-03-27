'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export const Header = () => {
    const [showLink, setShowLink] = useState(false);
    return (
        <>
        <nav className='flex justify-between items-center text-gray-50 pt-4'>
            <div className='md:divide-x-2 md:divide-solid flex justify-center'>
                <h1 className='pr-2 text-2xl font-bold'>
                    <Link href='/'>GPT-{process.env.NEXT_PUBLIC_GPT_VERSION} Preacher</Link>
                </h1>
                <span className='hidden md:inline pl-2 self-center'>AI use cases</span>
            </div>
            <ul className='hidden md:flex md:font-thin'>
                {process.env.NEXT_PUBLIC_GPT_VERSION === '3' ? (<li>
                    <Link href='https://gpt4app.io'>GPT-4 Preacher</Link>
                </li>) : (<li>
                    <Link href='https://gptallapps.com'>GPT-3 Preacher</Link>
                </li>)}
                {/* <li className='pl-4'>
                    <Link href='https://www.youtube.com/channel/UCBrAMWry4Z5GJlAmd-KdU2A'>Youtube Channel</Link>
                </li> */}
                <li className='pl-4'>
                    <Link href={`https://en.wikipedia.org/wiki/GPT-${process.env.NEXT_PUBLIC_GPT_VERSION}`}>What&#39;s GPT-{process.env.NEXT_PUBLIC_GPT_VERSION}?</Link>
                </li>
            </ul>
            {!showLink && <Bars3Icon className="h-6 w-6 text-white cursor-pointer border p-1 md:hidden" onClick={() => setShowLink(true)} />}
            {showLink && <XMarkIcon className="h-6 w-6 text-white cursor-pointer border p-1 md:hidden" onClick={() => setShowLink(false)} />}
        </nav>
        {showLink && <div className='md:hidden absolute right-4 bg-white w-1/2 rounded-md font-light text-gray-400 h-20 flex justify-center items-center'>
            <ul>
                {process.env.NEXT_PUBLIC_GPT_VERSION === '3' ? (<li>
                    <Link href='https://gpt4app.io'>GPT-4 Preacher</Link>
                </li>) : (<li>
                    <Link href='https://gptallapps.com'>GPT-3 Preacher</Link>
                </li>)}
                <li>
                    <Link href={`https://en.wikipedia.org/wiki/GPT-${process.env.NEXT_PUBLIC_GPT_VERSION}`}>What&#39;s GPT-{process.env.NEXT_PUBLIC_GPT_VERSION}?</Link>
                </li>
            </ul>
        </div>}
        </>
    );
};