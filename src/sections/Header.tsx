'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import DarkModeToggle from '@/components/ui/darkmode-switch';
import { AnimatedUnderlineLink } from '@/components/ui/animate-underline';

const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/showcase', label: 'Showcase' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { resolvedTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const close = () => setMobileOpen(false);
    const toggle = () => setMobileOpen((p) => !p);
    const isDark = (mounted ? resolvedTheme : theme) === "dark";

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-[100] dark:bg-black/70 bg-second/70 backdrop-blur-lg" // Increased z-index
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3">
                {/* Brand */}
                <AnimatedUnderlineLink href="/" >
                    <div className="dark:text-second text-black text-xl font-semibold translate-y-1 md:translate-y-0" onClick={close}>
                        <div className='flex items-center justify-evenly dark:text-second text-black'>
                            <Image src="/LogoDark.png" alt="logo" width={50} height={50} className='block dark:hidden relative -top-1 mr-2' />
                            <Image src="/LogoWhite.png" alt="logo" width={50} height={50} className='dark:block hidden relative -top-1 mr-2' />

                            <h1 className='relative -top-[2px] text-2xl'>Winglam <span className="font-light">Productions</span></h1>
                        </div>
                    </div>
                </AnimatedUnderlineLink>

                {/* Desktop links & Right-side Icons for Desktop */}
                <div className="hidden lg:flex items-center space-x-6">
                    <ul className="flex space-x-6 dark:text-second text-black">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <AnimatedUnderlineLink href={href}>
                                    <div className='font-semibold'>{label}</div>
                                </AnimatedUnderlineLink>
                            </li>
                        ))}
                    </ul>
                    <DarkModeToggle /> {/* Always visible on desktop */}
                    <Link
                        href="https://www.instagram.com/winglam.productions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-second border border-black text-black hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                    >
                        <img
                            src={`/instagram.svg`}
                            alt="Instagram"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-primary text-prime dark:text-second font-medium px-6 py-3 rounded-full border shadow-xl/30 hover:bg-second hover:text-prime transition-all duration-300"
                    >
                        Schedule a call
                    </Link>
                </div>

                {/* Hamburger (mobile only) */}
                <button
                    aria-label="Open menu"
                    onClick={toggle}
                    className="lg:hidden flex flex-col justify-between h-5 w-6 focus:outline-none z-[101]" // Ensure hamburger is above mobile nav when closed
                >
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform duration-300 ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform duration-300 ${mobileOpen ? '-translate-y-[12px] -rotate-45' : '' // Corrected translate-y
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile overlay nav */}
            <nav
                className={`lg:hidden fixed top-0 left-0 w-full h-screen z-[50] dark:bg-black/90 bg-second/90 backdrop-blur-md pt-20 flex flex-col items-center transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                    }`} // Changed to h-screen and top-0, left-0 for full coverage
            >
                <ul className="w-full flex flex-col items-center justify-start gap-8 dark:text-second text-black text-2xl font-medium py-4">
                    <div className="mt-auto mb-8 flex items-center space-x-6"> {/* Position at the bottom */}
                        <DarkModeToggle />
                        <Link
                            href="https://www.instagram.com/winglam.productions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-second border border-black text-black hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
                            onClick={close} // Optional: close nav on icon click
                        >
                            <img
                                src={`/instagram.svg`}
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className='w-auto'>
                            <Link
                                href={href}
                                onClick={close}
                                className="hover:underline underline-offset-4 dark:text-second text-black transition-colors duration-300"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="w-auto mt-4">
                        <Link
                            href="/contact"
                            onClick={close}
                            className="text-prime dark:text-second font-medium px-6 py-3 rounded-full border shadow-xl/30 hover:bg-prime hover:text-second dark:hover:bg-second dark:hover:text-prime transition-all duration-300"
                        >
                            Schedule a call
                        </Link>
                    </li>
                </ul>



            </nav>
        </motion.header>
    );
}