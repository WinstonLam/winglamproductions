'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import DarkModeToggle from '@/components/ui/darkmode-switch';


import { AnimatedUnderlineLink } from '@/components/ui/animate-underline';

/* ───────── links array once so we don’t repeat it ───────── */
const navLinks = [

    { href: '/services', label: 'Services' },
    { href: '/showcase', label: 'Showcase' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    /* helpers */
    const close = () => setMobileOpen(false);
    const toggle = () => setMobileOpen((p) => !p);
    const { resolvedTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    /* avoid hydration mismatch */
    useEffect(() => setMounted(true), []);

    /* true when currently in dark mode */
    const isDark = (mounted ? resolvedTheme : theme) === "dark";


    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-100 dark:bg-black/70 bg-second/70 backdrop-blur-lg"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3">
                {/* Brand */}


                <AnimatedUnderlineLink href="/" >
                    <div className="dark:text-second text-black text-xl font-semibold translate-y-1 md:translate-y-0" onClick={close}>
                        <div className='flex items-center justify-evenly dark:text-second text-black'>
                            <Image src={`${isDark ? `/LogoWhite.png` : `/LogoDark.png`}`} alt="logo" width={50} height={50} className='relative -top-1 mr-2' />
                            <h1 className='relative -top-[2px] text-2xl'>Winglam&nbsp;<span className="font-light">Productions</span></h1>
                        </div>
                    </div>
                </AnimatedUnderlineLink>



                {/* Desktop links */}
                <ul className="hidden lg:flex space-x-6 dark:text-second text-black">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <AnimatedUnderlineLink href={href} >
                                <div className='font-semibold '>{label}</div>
                            </AnimatedUnderlineLink >
                        </li>
                    ))}
                </ul>
                <DarkModeToggle className='absolute right-2 top-15 lg:relative z-100 lg:right-0 lg:top-0' />
                {/* Instagram icon */}
                <Link
                    href="https://www.instagram.com/winglam.productions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" z-100
                    absolute right-2 top-30 lg:top-0 lg:relative
                    p-2 rounded-full bg-second border border-black
                    text-black 
                    hover:bg-gray-200 dark:hover:bg-gray-600
                    transition-all duration-300 cursor-pointer
                    "
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
                    className="hidden lg:flex bg-primary text-prime dark:text-second font-medium px-6 py-3 rounded border shadow-xl/30  
                        rounded-full z-10 hover:bg-second hover:text-prime transition-all duration-300"
                >
                    Schedule a call
                </Link>

                {/* Hamburger (mobile only) */}
                <button
                    aria-label="Open menu"
                    onClick={toggle}
                    className="lg:hidden flex flex-col justify-between h-5 w-6 focus:outline-none"
                >
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-opacity ${mobileOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform ${mobileOpen ? '-translate-y-[12px] -rotate-45' : ''
                            }`}
                    />
                </button>



            </nav>

            {/* ───────── Mobile overlay nav ───────── */}


            <nav
                /* ───── styling ─────  */
                className={`lg:hidden fixed w-full z-40 dark:bg-black/90 bg-second/90 backdrop-blur py-4 flex flex-col ${mobileOpen ? 'translate-x-[0px]' : 'translate-x-[900px]'} transition-all duration-300`}>
                <ul className="h-full w-full flex flex-col items-center justify-center gap-8 dark:text-second text-black text-2xl font-medium z-100">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={close}
                                className="hover:underline underline-offset-4 dark:text-second text-black transition-colors duration-300"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <Link
                        href="/contact"
                        onClick={close}
                        className=" text-prime dark:text-second font-medium px-6 py-3 rounded border shadow-xl/30  
                        rounded-full z-10 hover:bg-prime hover:text-second dark:hover:bg-second dark:hover:text-prime transition-all duration-300"
                    >
                        Schedule a call
                    </Link>
                </ul>

            </nav>


        </motion.header>
    );
}
