'use client';
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Tabs } from "@/components/ui/tabs";
import YouTubeEmbed from "@/lib/youtubeVideo";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';

const Services = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    const videoIds = {
        brand: "3S8BE5M0fI0",
        lifestyle: "y_oWn83xevQ",
        socials: "", // Empty, should show "Coming Soon"
        wedding: ""  // Empty, should show "Coming Soon"
    };

    // Helper for the "Coming Soon" message
    const ComingSoonMessage = () => (
        <h2 className="text-4xl sm:text-6xl -mt-20 font-bold text-center text-black dark:text-second">
            {t('services.comingSoon')}
        </h2>
    );

    const services = [
        {
            title: t('services.tabBrand'),
            value: 'brand',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">{t('services.brandTitle')}</h1>
                        <p className=" text-base md:text-lg">
                            {t('services.brandDesc')}
                        </p>
                    </div>
                    {/* Video/Coming Soon section for Brand */}
                    <div className="w-full overflow-hidden aspect-video flex items-center justify-center">
                        {videoIds.brand ? (
                            <YouTubeEmbed videoId={videoIds.brand} />
                        ) : (
                            <ComingSoonMessage />
                        )}
                    </div>
                </div>
            ),
        },
        {
            title: t('services.tabLifestyle'),
            value: 'lifestyle',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">{t('services.lifestyleTitle')}</h1>
                        <p className=" text-base md:text-lg">
                            {t('services.lifestyleDesc')}
                        </p>
                    </div>
                    {/* Video/Coming Soon section for Lifestyle */}
                    <div className="w-full overflow-hidden aspect-video flex items-center justify-center">
                        {videoIds.lifestyle ? (
                            <YouTubeEmbed videoId={videoIds.lifestyle} />
                        ) : (
                            <ComingSoonMessage />
                        )}
                    </div>
                </div>
            ),
        },
        {
            title: t('services.tabSocials'),
            value: 'social', // Ensure this value aligns if used to dynamically fetch videoId
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second ">
                        <h1 className="font-bold text-xl md:text-4xl">{t('services.socialsTitle')}</h1>
                        <p className=" text-base md:text-lg">
                            {t('services.socialsDesc')}
                        </p>
                    </div>
                    {/* Video/Coming Soon section for Socials */}
                    <div className="w-full overflow-hidden aspect-video flex items-center justify-center">
                        {videoIds.socials ? (
                            <YouTubeEmbed videoId={videoIds.socials} />
                        ) : (
                            <ComingSoonMessage />
                        )}
                    </div>
                </div>
            ),
        },
        {
            title: t('services.tabWedding'),
            value: 'wedding',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">{t('services.weddingTitle')}</h1>
                        <p className=" text-base md:text-lg">
                            {t('services.weddingDesc')}
                        </p>
                    </div>
                    {/* Video/Coming Soon section for Wedding */}
                    <div className="w-full overflow-hidden aspect-video flex items-center justify-center">
                        {videoIds.wedding ? (
                            <YouTubeEmbed videoId={videoIds.wedding} />
                        ) : (
                            <ComingSoonMessage />
                        )}
                    </div>
                </div>
            ),
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pageContent = (
        <div className={`flex flex-col z-10 pt-20 sm:pt-10 pb-4 sm:pb-12 px-6 sm:px-4 ${!isMobile ? "text-second" : "text-prime dark:text-second"}`}>
            <div className="max-w-5xl mx-auto text-center flex flex-col sm:flex-row text-left items-center justify-evenly z-10">
                <motion.div className="w-full sm:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <motion.h1 className="text-3xl md:text-2xl mb-4 font-bold text-shadow-lg dark:text-shadow-lg/50">
                        {t('services.aboutUsTitle')}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-3xl mb-4 text-shadow-lg dark:text-shadow-lg/50"
                    >
                        {t('services.aboutUsP1')}
                    </motion.p>
                </motion.div>
                <motion.div className="w-full sm:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <motion.p
                        className="text-lg md:text-xl">
                        {t('services.aboutUsP2')}
                    </motion.p>
                </motion.div>
            </div>
            <motion.div className="max-w-6xl w-full py-16 sm:px-4 sm:mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-12 text-shadow-lg dark:text-shadow-lg/50">
                    {t('services.ourServicesTitle')}
                </h2>
                <div className="h-[25rem] sm:h-[35rem] md:h-[40rem] [perspective:1000px] relative flex flex-col items-center ">
                    <Link
                        href="/services"
                        className={`
                            inline-block mb-3 sm:mb-6 bg-primary dark:text-second font-medium px-4 py-2 rounded-full border dark:border-second 
                            shadow-xl/20 dark:shadow-xl/70 transition-all duration-300 w-[60%] sm:w-[30%] min-w-[152px] text-center hover:bg-second hover:text-black
                            `}
                    >
                        {t('services.moreInfoButton')}
                    </Link>
                    <Tabs tabs={services} />
                </div>
            </motion.div >
        </div >
    );

    if (!mounted) {
        return (
            <section id="services" className="z-10 min-h-screen overflow-hidden">
                <div className="bg-second dark:bg-black text-prime dark:text-second min-h-screen">
                    {pageContent}
                </div>
            </section>
        );
    }

    return (
        <section id="services" className="z-10 min-h-screen overflow-hidden">
            {isMobile ? (
                <div className="bg-second dark:bg-black text-prime dark:text-second min-h-screen">
                    {pageContent}
                </div>
            ) : (
                <AuroraBackground className="-mt-0 min-h-screen">
                    {pageContent}
                </AuroraBackground>
            )}
        </section>
    );
};

export default Services;