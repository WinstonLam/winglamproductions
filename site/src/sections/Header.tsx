'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedUnderlineLink } from '@/components/ui/animate-underline';

/* ───────── links array once so we don’t repeat it ───────── */
const navLinks = [
    { href: '/', label: 'Home' },
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

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-100 bg-black/90 backdrop-blur-lg"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Brand */}
                <AnimatedUnderlineLink href="/" children={<div className="text-second text-xl font-semibold">
                    Winglam&nbsp;<span className="font-light">Productions</span>
                </div>} />


                {/* Desktop links */}
                <ul className="hidden md:flex space-x-6 text-second">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <AnimatedUnderlineLink href={href} children={<div className='font-semibold text-second'>{label}</div>} />
                        </li>
                    ))}
                </ul>

                {/* Hamburger (mobile only) */}
                <button
                    aria-label="Open menu"
                    onClick={toggle}
                    className="md:hidden flex flex-col justify-between h-5 w-6 focus:outline-none"
                >
                    <span
                        className={`block h-0.5 w-full bg-second transition-transform ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-second transition-opacity ${mobileOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-full bg-second transition-transform ${mobileOpen ? '-translate-y-[12px] -rotate-45' : ''
                            }`}
                    />
                </button>

            </nav>

            {/* ───────── Mobile overlay nav ───────── */}


            <nav
                /* ───── styling ─────  */
                className={`md:hidden fixed w-full z-40 bg-black/50 backdrop-blur py-4  flex ${mobileOpen ? 'translate-x-[0px]' : 'translate-x-[900px]'} transition-all duration-300`}>
                <ul className="h-full w-full flex flex-col items-center justify-center gap-8 text-second text-2xl font-medium z-50">
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className='text-white'>
                            <Link
                                href={href}
                                onClick={close}
                                className="hover:underline underline-offset-4 text-second transition-colors duration-300"
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
