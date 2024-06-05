import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mobileLogo from '../../public/assets/logo/mobile-logo.svg';

function Logo({ className }) {
    return (
        <Link href={'/'} className={`block ${className}`}>
            <span className='text-primary-color font-semibold text-xl tracking-wider hidden md:block'>NETFLIX</span>
            <Image
                src={mobileLogo}
                alt='Logo'
                width={50}
                height={50}
                priority
                className='md:hidden p-2'
            />
        </Link>
    )
}

export default Logo;