'use client';
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import YouTubeEmbed from "@/lib/youtubeVideo";
import Link from "next/link";
// useState and useEffect removed as they are no longer used
import { useTranslations } from '@/lib/useTranslations'; // Added useTranslations
import { useLanguage } from '@/context/LanguageContext'; // Added useLanguage

const Hero = () => {
    const video = 'W9pzgz4NTZY';
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    return (
        <section id="hero" className="relative w-full text-second h-screen overflow-hidden">
            {/* Background video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">

                <YouTubeEmbed
                    videoId={video}
                    isBackgroundVideo={true}
                    customParams={{ autoplay: "1", controls: "0", mute: "1", loop: "1", modestbranding: "1" }}
                />
            </div>

            {/* <video playsInline loop muted autoPlay preload="none" className="absolute w-full h-full object-cover " src={`/hero.mp4`} /> */}


            {/* Overlay and content */}
            <div className="absolute flex flex-col w-full items-center justify-center h-full  text-center px-4 top-0">
                <motion.div className="absolute h-full w-full bg-black opacity-50 ">

                </motion.div>
                <motion.h1
                    className="translate-y-30 text-4xl md:text-5xl z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <TextGenerateEffect words={t('hero.title')} />
                    {/* <span className="font-bold">Elevating</span> your story <br /> with professional media */}
                </motion.h1>
                <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}>

                    <Link
                        href="/contact"
                        className="translate-y-40 inline-block bg-primary text-cream font-medium px-6 py-3 rounded border shadow-xl/30  
                        rounded-full z-10 hover:bg-second hover:text-prime transition-all duration-300"
                    >
                        {t('header.scheduleCall')}
                    </Link>
                </motion.div>
            </div>

        </section >
    );
};

export default Hero;
