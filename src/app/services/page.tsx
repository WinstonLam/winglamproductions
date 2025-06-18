"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/lib/utils";
import YouTubeEmbed from "@/lib/youtubeVideo";
import Link from "next/link";
import { servicesData, Service } from "@/lib/servicesData"; // Service type might need adjustment if keys change name
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";

export default function ServicesSection() {
    const { currentLanguage } = useLanguage();
    // Load both 'services' and 'serviceDetail' namespaces
    const { t, isLoading } = useTranslations(currentLanguage, ['services', 'serviceDetail']);

    if (isLoading) {
        // Optional: render a loading state, or return null
        // For a page section, often it's fine to show nothing or a simple loader.
        return (
            <section id="services" className="bg-second dark:bg-black flex flex-col items-center py-20 px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Loading...</h2>
            </section>
        );
    }

    return (
        <section
            id="services"
            className="bg-second dark:bg-black text-black dark:text-second flex flex-col items-center py-20 px-6 md:px-12 overflow-hidden"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                {t("services:page.title")}
            </h2>

            <div className="space-y-24 w-full max-w-6xl">
                {servicesData.map(({ titleKey, shortDescKey, video, priceFrom, slug }, idx) => (
                    <motion.div
                        key={slug} // Use slug for key as titleKey is now a translation key
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
                                <h3 className="text-2xl font-semibold">{t(titleKey)}</h3>
                                {priceFrom && (
                                    <p className="font-semibold text-lg sm:text-base whitespace-nowrap">
                                        {t('services:page.priceFromLabel')} €{priceFrom} {t('serviceDetail:tierCard.vatExclusive')}
                                    </p>
                                )}
                            </div>

                            <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-300">
                                {t(shortDescKey)}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start mt-4">
                                <Link
                                    href={`/services/${slug}`}
                                    className="inline-block bg-transparent border border-black text-primary dark:border-second dark:text-second font-medium px-6 py-3 rounded-full
                                     hover:bg-black hover:text-second dark:hover:bg-second dark:hover:text-black transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
                                >
                                    {t("services:page.moreInfoButton")}
                                </Link>
                            </div>
                        </div>

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
                                                {t("services:page.visualComingSoon")}
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