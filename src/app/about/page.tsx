/* ------------------------------------------------------------------
   About page – Winglam Productions
-------------------------------------------------------------------*/
"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Image from "next/image";
import YouTubeEmbed from "@/lib/youtubeVideo";

export default function AboutPage() {
    const video = 'W9pzgz4NTZY'
    return (
        <main className="flex flex-col gap-28 bg-second dark:bg-black text-black dark:text-second">
            {/* ───────────────── HERO ───────────────── */}
            <section className="relative flex items-center justify-center min-h-[60vh] px-6 overflow-hidden">

                <YouTubeEmbed
                    videoId={video}
                    isBackgroundVideo={true}
                    customParams={{ autoplay: "1", controls: "0", mute: "1", loop: "1", modestbranding: "1" }}
                />

                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-4xl md:text-6xl font-bold text-center text-second px-4"
                >
                    <TextGenerateEffect words="Our Story, Passion & Purpose" duration={0.8} />
                </motion.h1>
            </section>

            {/* ───────────────── MISSION ───────────────── */}
            <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        We exist to <span className="font-semibold">empower passionate stories</span> through the craft
                        of professional filmmaking. Every project—whether a 60&nbsp;second brand film or a feature‑length
                        documentary—gets the same dedication: cinematic visuals, compelling narrative, and an obsession
                        with detail that leaves audiences wanting more.
                    </p>
                    <p className="text-lg leading-relaxed">
                        From concept to final delivery, we collaborate closely with clients to make sure the heart of
                        their message sings on screen.
                    </p>
                </motion.div>

                {/* stylised image card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center justify-center w-full overflow-hidden rounded-lg"
                >
                    <BackgroundGradient animate className="w-full  object-cover">
                        <Image
                            src="/crew.png"
                            alt="Winglam team on set"
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[200px] md:h-[400px]"
                        />
                    </BackgroundGradient>
                </motion.div>
            </section>

            {/* ───────────────── VALUES STRIP ───────────────── */}
            <section className="bg-prime dark:bg-second py-16 px-6 text-second dark:text-prime">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
                    {[
                        { title: "Creativity", desc: "Bold ideas & fresh visual language" },
                        { title: "Craft", desc: "Meticulous attention to sight & sound" },
                        { title: "Collaboration", desc: "Transparent process, real partnership" },
                    ].map(({ title, desc }) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-3"
                        >
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="text-base">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ───────────────── CTA ───────────────── */}
            <section className="text-center pb-24 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Ready to elevate <span className="text-primary">your</span> story?
                </motion.h2>
                <Link
                    href="/contact"
                    className="text-prime dark:text-second font-medium px-6 py-3 rounded-full border shadow-xl/30 hover:bg-prime hover:text-second dark:hover:bg-second dark:hover:text-prime transition-all duration-300"
                >
                    Schedule a call
                </Link>
            </section>
        </main>
    );
}
