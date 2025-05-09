"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/lib/utils";

import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────
   Dummy data (swap with real videos / copy later)
───────────────────────────────────────────────────────────────────*/
const services = [
    {
        title: "Brand Story Elevation",
        video: `/hero.mp4`,
        desc:
            "A punchy, cinematic film that distils your brand DNA into a compelling \
       60‑second story—perfect for website hero banners and ad pre‑roll.",
    },
    {
        title: "Lifestyle Showcase",
        video: `/hero.mp4`,
        desc:
            "We capture authentic, aspirational day‑in‑the‑life footage to connect \
       your product with the lifestyle your audience dreams of.",
    },
    {
        title: "Social‑Media Burst",
        video: `/hero.mp4`,
        desc:
            "High‑energy snack‑size clips optimised for TikTok, Reels and Shorts. \
       Vertical from capture to delivery, complete with trending‑sound clearance.",
    },
    {
        title: "Interview / Testimonial",
        video: `/hero.mp4`,
        desc:
            "Polished sit‑down interviews with multi‑cam angles, pro audio and subtle \
       animated lower‑thirds. Let your best advocates do the talking.",
    },
    {
        title: "Wedding Films",
        video: `/hero.mp4`,
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
                            "flex flex-col md:flex-row items-center gap-10 group",
                            // alternate direction on even rows
                            idx % 2 === 1 && "md:flex-row-reverse"
                        )}
                    >
                        {/* video */}
                        <motion.div whileHover={{ y: -5 }}>
                            <BackgroundGradient>
                                <div
                                    className="w-full cursor-pointer rounded-lg overflow-hidden shadow-lg"
                                    onClick={() => setActiveSrc(video)}
                                >
                                    <video
                                        src={video}
                                        playsInline
                                        loop
                                        muted
                                        autoPlay
                                        className="w-full h-[240px] md:h-[320px] object-cover"
                                    />
                                </div>
                            </BackgroundGradient>
                        </motion.div>

                        {/* copy */}
                        < div className="w-full md:w-1/2 space-y-6" >
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
                    </motion.div>
                ))
                }
            </div >

            {/* ────────────── Lightbox / expanded video ────────────── */}
            <AnimatePresence>
                {
                    activeSrc && (
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                            onClick={close}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="relative max-w-[90vw] max-h-[90vh] p-4"
                                onClick={stop}
                            >
                                {/* close button */}
                                <button
                                    onClick={close}
                                    aria-label="Close"
                                    className="absolute w-8 h-8 right-4 top-3 rounded-full bg-white/90 text-black hover:bg-white shadow-md p-1 transition-all duration-300 z-100 cursor-pointer"
                                >
                                    ✕
                                </button>

                                <video
                                    src={activeSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </section >
    );
}
