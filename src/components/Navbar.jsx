import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Audit', href: '#audit' },
    { name: 'Tokenomic', href: '#tokenomic' },
    { name: 'Docs', href: '#docs' },
    { name: 'Community', href: '#Community' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative">
            {/* Mobile header */}
            <div className="custom-screen md:hidden">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link href="/">
                        <Image alt="KnoxFS logo" src="/mailgo.svg" width={150} height={50} />
                    </Link>
                    <div className="md:hidden">
                        <button
                            role="button"
                            aria-label="Open the menu"
                            className="text-gray-400 hover:text-gray-50"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="pb-5">
                        <ul className="space-y-4">
                            {navigation.map((item) => (
                                <li key={item.name} className="text-gray-50">
                                    <a className="block" href={item.href} onClick={() => setIsOpen(false)}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop nav */}
            <nav className="pb-5 md:text-sm md:static md:block hidden">
                <div className="custom-screen items-center mt-5 md:flex">
                    <div className="flex items-center justify-between py-5 md:block">
                        <Link href="/">
                            <Image alt="KnoxFS logo" src="/mailgo.svg" width={150} height={50} />
                        </Link>
                    </div>
                    <div className="flex-1 items-center mt-10 text-gray-300 md:font-medium md:mt-8 md:flex hidden">
                        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item) => (
                                <li key={item.name} className="text-gray-50">
                                    <a className="block" style={{ cursor: 'pointer' }} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
