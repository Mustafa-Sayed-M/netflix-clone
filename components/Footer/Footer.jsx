import Link from 'next/link';
import React from 'react';
import Logo from '../Atoms/Logo';

function Footer() {
    return (
        <footer className='py-10 bg-body-background border-t-2 border-t-gray-600'>
            <div className='container mx-auto'>
                <div className='container-wrapper grid grid-cols-1 sm;grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                    {/* Logo */}
                    <div className='logo'>
                        <Logo className={'mb-3 w-fit'} />
                        <p className='text-sm text-gray-300 mb-3'>
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page.
                        </p>
                        <ul className='social-links flex items-center justify-center sm:justify-start'>
                            <li>
                                {/* Facebook Link */}
                                <a className='block p-1.5 text-xl text-gray-300 hover:text-primary-color transition' href='' target='_blank' rel='noopener'>
                                    <i className="fa-brands fa-facebook fa-fw"></i>
                                </a>
                            </li>
                            <li>
                                {/* Linkedin Link */}
                                <a className='block p-1.5 text-xl text-gray-300 hover:text-primary-color transition' href='' target='_blank' rel='noopener'>
                                    <i className="fa-brands fa-linkedin fa-fw"></i>
                                </a>
                            </li>
                            <li>
                                {/* Github Link */}
                                <a className='block p-1.5 text-xl text-gray-300 hover:text-primary-color transition' href='' target='_blank' rel='noopener'>
                                    <i className="fa-brands fa-github fa-fw"></i>
                                </a>
                            </li>
                            <li>
                                {/* Twitter Link */}
                                <a className='block p-1.5 text-xl text-gray-300 hover:text-primary-color transition' href='' target='_blank' rel='noopener'>
                                    <i className="fa-brands fa-twitter fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div className='quick-links'>
                        <h1 className='mb-2 text-xl font-semibold'>Quick Links</h1>
                        <ul>
                            <li>
                                <Link href={'/'} className='block py-1 text-gray-300 hover:text-primary-color hover:translate-x-1.5 font-medium transition'>Movies</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='block py-1 text-gray-300 hover:text-primary-color hover:translate-x-1.5 font-medium transition'>Tv</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='block py-1 text-gray-300 hover:text-primary-color hover:translate-x-1.5 font-medium transition'>Trending Now</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='block py-1 text-gray-300 hover:text-primary-color hover:translate-x-1.5 font-medium transition'>Now Playing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;