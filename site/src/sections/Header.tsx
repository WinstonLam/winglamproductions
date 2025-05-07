'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import DarkModeToggle from '@/components/ui/darkmode-switch';
import { prefix } from '@/lib/prefix';

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
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Brand */}


                <AnimatedUnderlineLink href="/">
                    <div className="dark:text-second text-black text-xl font-semibold">
                        <div className='flex items-center justify-evenly dark:text-second text-black'>
                            <Image src={`${isDark ? `${prefix}/LogoWhite.png` : `${prefix}//LogoDark.png`}`} alt="logo" width={50} height={50} className='relative -top-1 mr-2' />
                            <h1 className='relative -top-[2px] text-2xl'>Winglam&nbsp;<span className="font-light">Productions</span></h1>
                        </div>
                    </div>
                </AnimatedUnderlineLink>



                {/* Desktop links */}
                <ul className="hidden md:flex space-x-6 dark:text-second text-black">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <AnimatedUnderlineLink href={href} >
                                <div className='font-semibold '>{label}</div>
                            </AnimatedUnderlineLink >
                        </li>
                    ))}
                </ul>
                <DarkModeToggle />

                {/* Hamburger (mobile only) */}
                <button
                    aria-label="Open menu"
                    onClick={toggle}
                    className="md:hidden flex flex-col justify-between h-5 w-6 focus:outline-none"
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
                className={`md:hidden fixed w-full z-40 dark:bg-black/50 bg-second/70 backdrop-blur py-4  flex ${mobileOpen ? 'translate-x-[0px]' : 'translate-x-[900px]'} transition-all duration-300`}>
                <ul className="h-full w-full flex flex-col items-center justify-center gap-8 dark:text-second text-black text-2xl font-medium z-50">
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
                </ul>
            </nav>


        </motion.header>
    );
}
