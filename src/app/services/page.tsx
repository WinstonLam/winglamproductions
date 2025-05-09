"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/lib/utils";
import YouTubeEmbed from "@/lib/youtubeVideo";

import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────
   Dummy data (swap with real videos / copy later)
───────────────────────────────────────────────────────────────────*/
const services = [
    {
        title: "Brand Story Elevation",
        video: `W9pzgz4NTZY`,
        desc:
            "A punchy, cinematic film that distils your brand DNA into a compelling \
       60‑second story—perfect for website hero banners and ad pre‑roll.",
    },
    {
        title: "Lifestyle Showcase",
        video: `W9pzgz4NTZY`,
        desc:
            "We capture authentic, aspirational day‑in‑the‑life footage to connect \
       your product with the lifestyle your audience dreams of.",
    },
    {
        title: "Social‑Media Burst",
        video: `W9pzgz4NTZY`,
        desc:
            "High‑energy snack‑size clips optimised for TikTok, Reels and Shorts. \
       Vertical from capture to delivery, complete with trending‑sound clearance.",
    },
    {
        title: "Interview / Testimonial",
        video: `W9pzgz4NTZY`,
        desc:
            "Polished sit‑down interviews with multi‑cam angles, pro audio and subtle \
       animated lower‑thirds. Let your best advocates do the talking.",
    },
    {
        title: "Wedding Films",
        video: `W9pzgz4NTZY`,
        desc:
            "From bridal prep to dance‑floor, every tear & laugh wrapped into a \
       timeless highlight film—delivered in beautiful 4K HDR.",
    },
];

/* ──────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────*/
export default function ServicesSection() {
    const [activeSrc, setActiveSrc] = useState<string | null>(null);
    const stop = (e: React.MouseEvent) => e.stopPropagation();
    const close = () => setActiveSrc(null);

    return (
        <section
            id="services"
            className="bg-second dark:bg-black text-black dark:text-second flex flex-col items-center py-20 px-6 md:px-12 overflow-hidden"
        >
            {/* page heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                See all our services
            </h2>

            <div className="space-y-24 w-full max-w-6xl">
                {services.map(({ title, desc, video }, idx) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={cn(
                            "flex flex-col lg:flex-row items-center gap-10 group",
                            idx % 2 === 1 && "lg:flex-row-reverse"
                        )}
                    >

                        < div className="w-full lg:w-1/2 space-y-6" >
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-300">
                                {desc}
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block bg-primary dark:text-white font-medium px-6 py-2 rounded-full border dark:border-white
                         hover:bg-black dark:hover:bg-white hover:text-second dark:hover:text-prime transition-all duration-300 cursor-pointer"
                            >
                                Book this service
                            </Link>
                        </div>
                        {/* video */}
                        <motion.div whileHover={{ y: -5 }}>
                            <BackgroundGradient>
                                <div
                                    className="w-[20rem] h-[10rem] sm:w-[33rem] sm:h-[18rem] cursor-pointer rounded-lg overflow-hidden shadow-lg aspect-video"
                                    onClick={() => setActiveSrc(video)}
                                >
                                    <YouTubeEmbed videoId={video} customParams={{ autoplay: "0", controls: '1' }} />
                                </div>
                            </BackgroundGradient>
                        </motion.div>



                    </motion.div>
                ))
                }
            </div >


        </section >
    );
}
