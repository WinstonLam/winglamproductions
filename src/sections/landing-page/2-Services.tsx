'use client';
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Tabs } from "@/components/ui/tabs";
import YouTubeEmbed from "@/lib/youtubeVideo";
import Link from "next/link";
import { useState, useEffect } from 'react'; // Import hooks

const Services = () => {
    const videoIds = {
        brand: "W9pzgz4NTZY",
        lifestyle: "y_oWn83xevQ"
    };

    const services = [
        {
            title: 'Brand',
            value: 'brand',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">Brand Story Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Elevate the story of your brand
                        </p>
                    </div>
                    <div className="w-full overflow-hidden aspect-video">
                        <YouTubeEmbed videoId={videoIds.brand} />
                    </div>
                </div>
            ),
        },
        {
            title: 'Lifestyle',
            value: 'lifestyle',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">Lifestyle Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Capture the genuine rhythm of everyday life
                        </p>
                    </div>
                    <div className="w-full overflow-hidden aspect-video">
                        <YouTubeEmbed videoId={videoIds.lifestyle} />
                    </div>
                </div>
            ),
        },
        {
            title: 'Socials',
            value: 'social',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second ">
                        <h1 className="font-bold text-xl md:text-4xl">Social Media Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Snack‑size content engineered to stop the scroll
                        </p>
                    </div>
                    <div className="w-full overflow-hidden aspect-video">
                        <YouTubeEmbed videoId={videoIds.brand} />
                    </div>
                </div>
            ),
        },
        {
            title: 'Business',
            value: 'Business', // Note: value is typically lowercase like 'business' for consistency
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">Business Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Authentic voices. Compelling on‑screen conversations.
                        </p>
                    </div>
                    <div className="w-full overflow-hidden aspect-video">
                        <YouTubeEmbed videoId={videoIds.brand} />
                    </div>
                </div>
            ),
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Component has mounted

        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Check on initial mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pageContent = (
        <div className={`flex flex-col z-10 pt-20 sm:pt-10 pb-4 sm:pb-12 px-14 sm:px-4",
            ${!isMobile ? "text-second" : "text-prime dark:text-second"} 
        `}>
            {/* "About us" section text will inherit from the parent above */}
            <div className="max-w-5xl mx-auto text-center flex flex-col sm:flex-row text-left items-center justify-evenly z-10">
                <motion.div className="w-[80%] sm:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    {/* Removed explicit text colors, will inherit */}
                    <motion.h1 className="text-3xl md:text-2xl mb-4 font-bold text-shadow-lg dark:text-shadow-lg/50">
                        About us
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-3xl mb-4 text-shadow-lg dark:text-shadow-lg/50"
                    >
                        Empowering passionate stories through creative, professional filmmaking.
                    </motion.p>
                </motion.div>
                <motion.div className="w-[80%] sm:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}>
                    {/* Removed explicit text colors, will inherit */}
                    <motion.p
                        className="text-lg md:text-xl">
                        At Winglam Productions our mission is to empower people to share their passion in life, and we are there to elevate it by bringing it to life on screen.
                        We believe every story is unique and deserves to be told with creativity and professionalism. From concept to final cut, we work closely with our clients to produce videos that truly resonate.
                    </motion.p>
                </motion.div>
            </div>
            <motion.div className="max-w-6xl w-full py-16 px-4 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}>
                {/* "Our Services" title will also inherit the conditional text color */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-12 text-shadow-lg dark:text-shadow-lg/50">
                    Our Services
                </h2>
                <div className="h-[25rem] sm:h-[35rem] md:h-[40rem] [perspective:1000px] relative flex flex-col items-center ">
                    <Link
                        href="/services"
                        className={`
                            inline-block mb-3 sm:mb-6 bg-primary dark:text-second font-medium px-4 py-2 rounded-full border border-black dark:border-white shadow-xl/20 dark:shadow-xl/70 transition-all duration-300 w-[50%] sm:w-[30%] text-center
                            hover:bg-second
                            ${isMobile ? "hover:text-prime" : "hover:text-second"}`
                        }
                    >
                        See All Services
                    </Link>
                    {/* Pass isMobile to Tabs if its own hook isn't sufficient or causes issues */}
                    {/* For now, Tabs uses its own useIsMobile hook which should be fine */}
                    <Tabs tabs={services} />
                </div>
            </motion.div >
        </div >
    );

    if (!mounted) {
        // This renders the mobile-like background during SSR / pre-hydration
        // If isMobile is false initially, pageContent will get 'text-second'
        // leading to desktop text on mobile background.
        // Consider setting initial isMobile state based on common case or making this block neutral.
        // For now, sticking to your provided !mounted block.
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
                // Mobile view: simple background with its own text styling context
                // The pageContent div inside will correctly use its isMobile=true logic for text.
                <div className="bg-second dark:bg-black text-prime dark:text-second min-h-screen">
                    {pageContent}
                </div>
            ) : (
                // Desktop view: AuroraBackground
                // The pageContent div inside will correctly use its isMobile=false logic for text (i.e., text-second).
                <AuroraBackground className="-mt-0 min-h-screen">
                    {pageContent}
                </AuroraBackground>
            )}
        </section>
    );
};

export default Services;