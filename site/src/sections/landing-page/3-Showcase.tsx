'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

type ShowcaseItem = { title: string };

const projects: ShowcaseItem[] = [
    { title: "John's Burgers" },
    { title: 'Lotus Yoga' },
    { title: 'Aurora Tech' },
    { title: 'Vintage Wheels' },
];

export default function Showcase() {
    return (
        <section id="showcase" className="bg-second py-16 px-4 text-prime">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
                    Project Showcase
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <ShowcaseCard key={p.title} title={p.title} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── individual tile ───────────────────────────────────────── */
function ShowcaseCard({
    title,
    index,
}: {
    title: string;
    index: number;
}) {
    const vid = useRef<HTMLVideoElement>(null);

    /* helper callbacks */
    const play = () => vid.current?.play();
    const reset = () => {
        if (!vid.current) return;
        vid.current.pause();
        vid.current.currentTime = 0;
    };

    return (
        <motion.div
            /* stagger‑in */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            /* hover variant controller */
            animate="rest"          // <- declare starting variant

            whileHover="hover"

            className="flex flex-col items-start group cursor-pointer"
            onHoverStart={play}
            onHoverEnd={reset}
        >
            {/* ── TITLE ── */}
            <motion.span
                variants={{
                    rest: { y: 0, textShadow: '0px 0px 0px rgba(0,0,0,0)' },
                    hover: {
                        y: -8,
                        textShadow: '0px 4px 12px rgba(0,0,0,0.35)',
                    },
                }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="mb-3 text-lg font-semibold text-prime select-none"
            >
                {title}
            </motion.span>

            {/* ── POSTER + VIDEO STACK ── */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg group-hover:-translate-y-2 transition-all duration-300">
                {/* poster sits behind */}
                <img
                    src="/hero.png"
                    alt={`${title} poster`}
                    className="w-full h-56 md:h-64 object-cover"
                />

                {/* video fades in on hover */}
                <motion.video
                    ref={vid}
                    src="/hero.mp4"
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover "
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.25 }}
                />
            </div>
        </motion.div>
    );
}
