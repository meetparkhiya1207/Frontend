"use client";
import * as React from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <header className="grid grid-cols-6 md:grid-cols-12 md:gap-4 gap-0 h-[80px] items-center px-4">
                    <div className="col-span-2">
                        <h1 className="text-2xl font-normal">NorthStar</h1>
                    </div>
                    <div className="md:col-span-8 col-span-0">
                        {/* Navbar visible on large screens */}
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" passHref>
                                <a className="text-blue-500 hover:text-blue-700">
                                    <span className="font-normal font-sans text-[14px]">Home</span>
                                </a>
                            </Link>
                            <Link href="/about" passHref>
                                <a className="text-gray-700 hover:text-gray-900">
                                    <span className="font-normal font-sans text-[14px]">About</span>
                                </a>
                            </Link>
                            <Link href="/contact" passHref>
                                <a className="text-gray-700 hover:text-gray-900">
                                    <span className="font-normal font-sans text-[14px]">Contact Us</span>
                                </a>
                            </Link>
                        </nav>
                        {/* Mobile navbar */}
                        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 bg-white w-full shadow-lg`}>
                            <Link href="/" passHref>
                                <a className="block px-4 py-2 text-blue-500 hover:text-blue-700">
                                    <span className="font-normal font-sans text-[14px]">Home</span>
                                </a>
                            </Link>
                            <Link href="/about" passHref>
                                <a className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                                    <span className="font-normal font-sans text-[14px]">About</span>
                                </a>
                            </Link>
                            <Link href="/contact" passHref>
                                <a className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                                    <span className="font-normal font-sans text-[14px]">Contact Us</span>
                                </a>
                            </Link>
                        </nav>
                    </div>
                    <div className="md:col-span-2 col-span-3">
                        <div className="flex space-x-4 justify-end">
                            {/* Icons */}
                            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                    stroke="#1D1D1D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                    stroke="#1D1D1D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                                    stroke="#1D1D1D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M3 6H21" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                                    stroke="#1D1D1D"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {/* Mobile menu icon */}
                            <svg
                                className="md:hidden w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={toggleMenu}
                            >
                                <path d="M3 12H21" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H21" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;