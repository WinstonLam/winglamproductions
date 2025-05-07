'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { prefix } from '@/lib/prefix';

type ShowcaseItem = { title: string };

const projects: ShowcaseItem[] = [
    { title: "John's Burgers" },
    { title: 'Lotus Yoga' },
    { title: 'Aurora Tech' },
    { title: 'Vintage Wheels' },
];

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Showcase() {
    return (
        <section id="showcase" className="bg-second dark:bg-black py-16 px-4 text-prime dark:text-second">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
                    Project Showcase
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <ShowcaseCard key={p.title} title={p.title} index={i} />
                    ))}
                </div>
                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
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
                className="mb-3 text-lg font-semibold text-prime dark:text-second select-none"
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
                    src={`${prefix}/media/hero.mp4`}
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
