'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DarkModeToggle from '@/components/ui/darkmode-switch';
import { AnimatedUnderlineLink } from '@/components/ui/animate-underline';
import { useTranslations } from '@/lib/useTranslations';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
    { href: '/services', labelKey: 'nav.services' },
    { href: '/showcase', labelKey: 'nav.showcase' },
    { href: '/about', labelKey: 'nav.about' },
    { href: '/contact', labelKey: 'nav.contact' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { currentLanguage, setCurrentLanguage: setContextLanguage } = useLanguage();
    // Update useTranslations call to specify the 'common' namespace
    const { t, isLoading } = useTranslations(currentLanguage, 'common');

    const close = () => setMobileOpen(false);
    const toggleMobileMenu = () => setMobileOpen((p) => !p);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'nl' : 'en';
        setContextLanguage(newLanguage);
    };

    const utilityButtonBaseStyle = "w-9 h-9 flex items-center justify-center rounded-full bg-second border border-black text-black hover:bg-gray-200 dark:border-second dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer";

    // If translations are loading, you might want to return null or a loader,
    // or allow keys to be shown briefly. For simplicity, we'll let keys show if loading.
    // if (isLoading) {
    //     return null; // Or a loading skeleton for the header
    // }

    const langToggleAriaLabel = currentLanguage === 'en' ? t('common:header.switchToDutch') : t('common:header.switchToEnglish');

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-[100] dark:bg-black/70 bg-second/70 backdrop-blur-lg"
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3">
                <AnimatedUnderlineLink href="/" >
                    <div className="dark:text-second text-black text-xl font-semibold translate-y-1 md:translate-y-0" onClick={close}>
                        <div className='flex items-center justify-evenly dark:text-second text-black'>
                            <Image src="/LogoDark.png" alt={t('common:header.logoAlt')} width={50} height={50} className='block dark:hidden relative -top-1 mr-2' />
                            <Image src="/LogoWhite.png" alt={t('common:header.logoAlt')} width={50} height={50} className='dark:block hidden relative -top-1 mr-2' />
                            <h1 className='relative -top-[2px] text-2xl'>Winglam <span className="font-light">Productions</span></h1>
                        </div>
                    </div>
                </AnimatedUnderlineLink>

                <div className="hidden lg:flex items-center space-x-6">
                    <ul className="flex space-x-6 dark:text-second text-black">
                        {navLinks.map(({ href, labelKey }) => (
                            <li key={href}>
                                <AnimatedUnderlineLink href={href}>
                                    {/* Update key to include namespace */}
                                    <div className='font-semibold'>{t(\`common:\${labelKey}\`)}</div>
                                </AnimatedUnderlineLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-3">
                        <DarkModeToggle />
                        <button
                            onClick={toggleLanguage}
                            aria-label={langToggleAriaLabel}
                            className={utilityButtonBaseStyle}
                        >
                            <span className="text-xs font-semibold">
                                {currentLanguage === 'nl' ? 'NL' : 'EN'}
                            </span>
                        </button>
                        <Link
                            href="https://www.instagram.com/winglam.productions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram" // This aria-label is static and doesn't need translation
                            className={utilityButtonBaseStyle}
                        >
                            <img
                                src={`/instagram.svg`}
                                alt="" // Decorative, as Link has aria-label
                                width={18}
                                height={18}
                            />
                        </Link>
                    </div>

                    <Link
                        href="/contact"
                        className="bg-primary text-prime dark:text-second font-medium px-6 py-3 rounded-full border shadow-xl/30 hover:bg-second hover:text-prime transition-all duration-300"
                    >
                        {/* Update key to include namespace */}
                        {t('common:header.scheduleCall')}
                    </Link>
                </div>

                <button
                    aria-label={t('common:header.openMenu')} // Translate hamburger aria-label
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex flex-col justify-between h-5 w-6 focus:outline-none z-[101]"
                >
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform duration-300 ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-full dark:bg-second bg-black transition-transform duration-300 ${mobileOpen ? '-translate-y-[12px] -rotate-45' : ''}`}
                    />
                </button>
            </nav>

            <nav
                className={`lg:hidden fixed top-0 left-0 w-full h-screen z-[50] dark:bg-black/90 bg-second/90 backdrop-blur-md pt-20 flex flex-col items-center transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className="w-full flex flex-col items-center justify-start gap-8 dark:text-second text-black text-2xl font-medium py-4">
                    <div className="flex items-center space-x-4 mb-4">
                        <DarkModeToggle />
                        <button
                            onClick={toggleLanguage}
                            aria-label={langToggleAriaLabel}
                            className={utilityButtonBaseStyle}
                        >
                            <span className="text-xs font-semibold">
                                {currentLanguage === 'en' ? 'NL' : 'EN'}
                            </span>
                        </button>
                        <Link
                            href="https://www.instagram.com/winglam.productions/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className={utilityButtonBaseStyle}
                            onClick={close}
                        >
                            <img
                                src={`/instagram.svg`}
                                alt=""
                                width={18}
                                height={18}
                            />
                        </Link>
                    </div>

                    {navLinks.map(({ href, labelKey }) => (
                        <li key={href} className='w-auto'>
                            <Link
                                href={href}
                                onClick={close}
                                className="hover:underline underline-offset-4 dark:text-second text-black transition-colors duration-300"
                            >
                                {t(\`common:\${labelKey}\`)}
                            </Link>
                        </li>
                    ))}
                    <li className="w-auto mt-4">
                        <Link
                            href="/contact"
                            onClick={close}
                            className="text-prime dark:text-second font-medium px-6 py-3 rounded-full border shadow-xl/30 hover:bg-prime hover:text-second dark:hover:bg-second dark:hover:text-prime transition-all duration-300"
                        >
                            {t('common:header.scheduleCall')}
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}