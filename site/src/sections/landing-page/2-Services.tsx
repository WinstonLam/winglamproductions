'use client';
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Tabs } from "@/components/ui/tabs";
import { prefix } from "@/lib/prefix";



const Services = () => {
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
                        <video
                            src={`${prefix}/media/hero.mp4`}
                            playsInline
                            loop
                            muted
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ),
        },

        /* ─────────── LIFESTYLE ─────────── */
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
                        <video
                            src={`${prefix}/media/hero.mp4`}
                            playsInline
                            loop
                            muted
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ),
        },

        /* ─────────── SOCIAL ─────────── */
        {
            title: 'Socials',
            value: 'social',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second ">
                        <h1 className="font-bold text-xl md:text-4xl">Social Media Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Snack‑size content engineered to stop the scroll
                        </p>
                    </div>

                    <div className="w-full overflow-hidden aspect-video">
                        <video
                            src={`${prefix}/media/hero.mp4`}
                            playsInline
                            loop
                            muted
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ),
        },

        /* ─────────── INTERVIEW ─────────── */
        {
            title: 'Interviews',
            value: 'interview',
            content: (
                <div className="w-full h-full relative overflow-hidden rounded-2xl bg-second dark:bg-stone-950 text-second">
                    <div className="p-4 z-10 text-black dark:text-second">
                        <h1 className="font-bold text-xl md:text-4xl">Interview Elevation</h1>
                        <p className=" text-base md:text-lg">
                            Authentic voices. Compelling on‑screen conversations.
                        </p>
                    </div>

                    <div className="w-full overflow-hidden aspect-video">
                        <video
                            src={`${prefix}/media/hero.mp4`}
                            playsInline
                            loop
                            muted
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ),
        },
    ];



    return (
        <section id="services" className="z-10 min-h-screen overflow-hidden">
            <AuroraBackground className="-mt-0 min-h-screen">

                <div className="flex flex-col z-10 pt-10 pb-4 sm:pb-12 px-14 sm:px-4">
                    <div className="max-w-5xl mx-auto text-center flex flex-col sm:flex-row text-left text-second items-center justify-evenly z-10">

                        <motion.div className="w-[80%] sm:w-[50%]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}>
                            <motion.h1 className="text-xl md:text-2xl mb-4 font-bold text-shadow-lg/50">
                                About us
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-3xl mb-4 text-shadow-lg/50"

                            >
                                Empowering passionate stories through creative, professional filmmaking.

                            </motion.p>
                        </motion.div>
                        <motion.div className="w-[80%] sm:w-[50%]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}>
                            <motion.p
                                className="text-lg md:text-xl">
                                At Winglam Productions our mission is to empower people to share their passion in life, and we are there to elevate it by bringing it to life on screen.
                                We believe every story is unique and deserves to be told with creativity and professionalism. From concept to final cut, we work closely with our clients to produce videos that truly resonate.
                            </motion.p>
                        </motion.div>
                    </div>
                    <motion.div className="max-w-6xl py-16 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-12 text-second text-shadow-lg/50">
                            Our Services
                        </h2>

                        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b ">
                            <a
                                href="/services"
                                className="inline-block mb-3 sm:mb-6 bg-primary text-white font-medium px-4 py-2 rounded border border-white shadow-xl/70 
                        rounded-full z-10 hover:bg-second hover:text-prime transition-all duration-300"
                            >
                                See All Services
                            </a>
                            <Tabs tabs={services} />
                        </div>
                    </motion.div>
                </div>
            </AuroraBackground>
        </section>
    );
};

export default Services;
