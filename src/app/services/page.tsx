"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient"; // Adjust path if needed
import { cn } from "@/lib/utils"; // Assuming you have this utility
import YouTubeEmbed from "@/lib/youtubeVideo"; // Adjust path if needed
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import { useTranslations } from "@/lib/useTranslations"; // Added
import { LanguageContext } from "@/context/LanguageContext"; // Added
import { useContext } from "react"; // Added

/* ──────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────*/
export default function ServicesSection() {
    const { language } = useContext(LanguageContext); // Added
    const { t } = useTranslations(language); // Added

    return (
        <section
            id="services"
            className="bg-second dark:bg-black text-black dark:text-second flex flex-col items-center py-20 px-6 md:px-12 overflow-hidden"
        >
            {/* page heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                {t('servicesPage.title')}
            </h2>

            <div className="space-y-24 w-full max-w-6xl">
                {servicesData.map(({ title, shortDesc, video, priceFrom, slug }, idx) => (
                    <motion.div
                        key={slug} // Changed key to slug for more robust key if titles could ever be non-unique
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={cn(
                            "flex flex-col lg:flex-row items-center gap-10 lg:gap-16 group",
                            idx % 2 === 1 && "lg:flex-row-reverse"
                        )}
                    >
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <h3 className="text-2xl font-semibold">{t(title)}</h3>
                                {priceFrom && (
                                    <p className="font-semibold text-lg sm:text-base whitespace-nowrap">{t(priceFrom)}</p>
                                )}
                            </div>

                            <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-300">
                                {t(shortDesc)}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start mt-4">
                                <Link
                                    href={`/services/${slug}`}
                                    className="inline-block bg-transparent border border-black text-primary dark:border-second dark:text-second font-medium px-6 py-3 rounded-full
                                     hover:bg-black hover:text-second dark:hover:bg-second dark:hover:text-black transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
                                >
                                    {t('servicesPage.moreInfoButton')}
                                </Link>

                            </div>
                        </div>

                        {/* video */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="w-full lg:w-1/2"
                        >
                            <BackgroundGradient containerClassName="rounded-lg" className="p-0 bg-transparent">
                                <div
                                    className="w-full aspect-video cursor-pointer rounded-lg overflow-hidden shadow-lg"
                                >
                                    {video ? (
                                        <YouTubeEmbed videoId={video} customParams={{ autoplay: "0", controls: '1' }} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-zinc-800 rounded-lg">
                                            <h1 className="text-zinc-600 dark:text-zinc-400 font-bold text-2xl sm:text-3xl text-center p-4">
                                                {t('servicesPage.visualComingSoon')}
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </BackgroundGradient>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}