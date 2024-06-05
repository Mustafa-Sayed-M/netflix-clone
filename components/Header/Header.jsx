'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../Atoms/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Css Style
import './Header.css';
import Image from 'next/image';

// Navbar Toggler Icons
const barsIcon = <i className="fa-solid fa-bars-staggered fa-fw"></i>;
const xIcon = <i className="fa-solid fa-xmark fa-fw"></i>;

const links = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/movies',
        text: 'Movies'
    },
    {
        href: '/tv',
        text: 'Tv'
    },
    {
        href: '/trending',
        text: 'Trend Now'
    },
];

function Header() {

    const pathname = usePathname();

    const [openNavbar, setOpenNavbar] = useState(false);

    useEffect(() => {
        setOpenNavbar(false);
    }, [pathname]);

    const handleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }

    return (
        <header className='sticky top-0 start-0 z-50 border-b border-b-gray-400 backdrop-blur-md bg-body-background/50'>
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                <Logo />
                <nav className='order-2 md:order-1' data-open-navbar={openNavbar}>
                    <ul className='flex items-center gap-1'>
                        {
                            links.map((link, idx) => <li key={idx}>
                                <Link className={`px-2 py-4 block text-center font-medium ${pathname === link.href ? "active" : ""} relative transition`} href={link.href}>{link.text}</Link>
                            </li>)
                        }
                    </ul>
                </nav>
                <div className='buttons flex items-center gap-3 order-1'>
                    <Link href={'/profile'}>
                        <Image
                            src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'}
                            alt='Profile Avatar'
                            width={100}
                            height={100}
                            priority
                            className={`rounded-full w-9 h-9 object-cover border-2 transition ${pathname === '/profile' ? "border-primary-color" : "border-white"}`}
                        />
                    </Link>
                    <button onClick={handleNavbar} type='button' className={`navbar-toggler text-3xl md:hidden ${openNavbar ? "text-primary-color" : ""}`}>
                        {openNavbar ? xIcon : barsIcon}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;