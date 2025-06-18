'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { cn } from '@/lib/utils';
import YouTubeEmbed from '@/lib/youtubeVideo';
import {
    showcaseData,
    ShowcaseCategory,
    ShowcaseItem,
} from '@/lib/showcaseData';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';

/* ---------- local helper types ---------- */

type CatIndex = number;   // keeps the JSX a bit less cluttered
type ItemIndex = number;

/* ---------- component ---------- */

export default function ShowcasePage() {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    /* state */
    const [activeCat, setActiveCat] = useState<CatIndex>(0);
    const [activeItem, setActiveItem] = useState<ItemIndex>(0);
    const [openCats, setOpenCats] = useState<boolean[]>(
        () => showcaseData.map(() => true),
    );
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lightbox, setLightbox] = useState<string | null>(null);

    /* derived */
    const cat: ShowcaseCategory = showcaseData[activeCat];
    const item: ShowcaseItem = cat.items[activeItem] ?? cat.items[0];
    const validImages: string[] = item.images.filter(Boolean);

    /* disable body scroll while the drawer is open on mobile */
    useEffect(() => {
        const shouldLock = isMobileMenuOpen && window.innerWidth < 1024;
        document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
        return () => void (document.body.style.overflow = 'auto');
    }, [isMobileMenuOpen]);

    /* helpers */
    const toggleCat = (idx: CatIndex) =>
        setOpenCats((prev) => prev.map((o, i) => (i === idx ? !o : o)));

    const selectItem = (c: CatIndex, i: ItemIndex) => {
        setActiveCat(c);
        setActiveItem(i);
        if (window.innerWidth < 1024) setIsMobileMenuOpen(false);
    };

    /* ---------- JSX ---------- */

    return (
        <section className="min-h-screen flex lg:flex-row flex-col bg-second dark:bg-black text-black dark:text-second overflow-hidden relative">
            {/* overlay */}
            {isMobileMenuOpen && window.innerWidth < 1024 && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* mobile toggle */}
            <button
                className={cn(
                    'lg:hidden fixed top-20 left-5 z-[60] p-2 rounded-full border',
                    'bg-second dark:bg-black text-black dark:text-second',
                )}
                onClick={() => setIsMobileMenuOpen((o) => !o)}
            >
                {isMobileMenuOpen ? t('showcase.close') : t('showcase.open')}
            </button>

            {/* sidebar */}
            <aside
                className={cn(
                    'w-72 shrink-0 border-r px-4 pt-20 pb-10 h-screen overflow-y-auto',
                    'fixed top-0 left-0 z-50 bg-second dark:bg-black transition-transform',
                    'lg:sticky lg:translate-x-0',
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                )}
            >
                <h1 className="text-xl font-semibold mb-1">{t('showcase.ourShowcase')}</h1>
                <hr className="mb-4" />

                {showcaseData.map((c, cIdx) => (
                    <motion.div
                        key={c.titleKey}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: cIdx * 0.05 + 0.2 }}
                        className="mb-2"
                    >
                        <button
                            className="w-full flex justify-between py-2 px-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md"
                            onClick={() => toggleCat(cIdx)}
                        >
                            <span
                                className={cn(
                                    'font-medium transition',
                                    activeCat === cIdx
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600'
                                        : '',
                                )}
                            >
                                {t(c.titleKey)}
                            </span>
                            <svg
                                className={cn(
                                    'h-4 w-4 transition-transform',
                                    openCats[cIdx] ? 'rotate-90' : 'rotate-0',
                                )}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <AnimatePresence initial={false}>
                            {openCats[cIdx] && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="pl-4"
                                >
                                    {c.items.map((it, iIdx) => (
                                        <li key={it.labelKey} className="my-1">
                                            <button
                                                className={cn(
                                                    'w-full text-left py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm',
                                                    activeCat === cIdx && activeItem === iIdx
                                                        ? 'font-semibold text-sky-600'
                                                        : '',
                                                )}
                                                onClick={() => selectItem(cIdx, iIdx)}
                                            >
                                                {t(it.labelKey)}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </aside>

            {/* main content */}
            <main className="flex-1 py-12 px-6 lg:px-12 overflow-y-auto lg:pt-24 pt-20">
                {/* title */}
                <motion.h2
                    key={`${item.labelKey}-title`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-3xl lg:text-4xl font-bold mb-8"
                >
                    {t(item.labelKey)}
                </motion.h2>

                {/* video */}
                {item.videoId && (
                    <motion.div
                        key={`${item.labelKey}-video`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl mb-8"
                    >
                        <YouTubeEmbed videoId={item.videoId} />
                    </motion.div>
                )}

                {/* description & points */}
                <motion.div
                    key={`${item.labelKey}-details`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-8"
                >
                    <div className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md md:space-x-8 space-y-6 md:space-y-0">
                        <div className="flex-1">
                            <h3 className="font-semibold text-xl mb-2">
                                {item.comingSoon
                                    ? t('showcase.comingTitle')
                                    : t('showcase.clientRequest')}
                            </h3>
                            <p className="text-lg">{t(item.descriptionKey)}</p>
                        </div>

                        {item.pointsKeys.length > 0 && (
                            <>
                                <hr className="w-full md:w-px md:min-h-[8rem] my-4 md:my-0" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-xl mb-2">
                                        {item.comingSoon
                                            ? t('showcase.comingFeatures')
                                            : t('showcase.ourSolution')}
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-lg">
                                        {item.pointsKeys.map((k) => (
                                            <li key={k}>{t(k)}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* gallery or CTA */}
                {item.comingSoon ? (
                    <div className="text-center py-6">
                        {/* <p className="mb-6 text-lg">
                            {t('showcase.comingCtaCopy', {
                                cat: t(cat.titleKey).toLowerCase(),
                            })}
                        </p> */}
                        <Link
                            href="/contact"
                            className="inline-block bg-sky-600 dark:bg-sky-400 text-white dark:text-black px-8 py-3 rounded-full shadow-lg"
                        >
                            {t('showcase.schedule')}
                        </Link>
                    </div>
                ) : (
                    validImages.length > 0 && (
                        <>
                            <hr className="border-gray-300 dark:border-zinc-700 my-8 max-w-4xl mx-auto" />
                            <ParallaxScroll images={validImages} />
                        </>
                    )
                )}
            </main>

            {/* lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100]"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-h-[90vh] max-w-[90vw]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightbox}
                                alt="Showcase image"
                                width={1200}
                                height={800}
                                objectFit="contain"
                            />
                        </motion.div>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                        >
                            ✕
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
