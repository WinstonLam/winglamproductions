"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";
import { AnimatedUnderlineLink } from "@/components/ui/animate-underline";

/* ------------------------------------------------------------------
   Mock data – replace with real projects later                       */
const imagesPlaceholder = [
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
    "/hero.png",
];

const categories = [
    {
        title: "Weddings",
        items: [
            {
                label: "Jason & Jina Wedding",
                video: "/hero.mp4",
                description:
                    "Jason and Jina wanted an intimate cinematic recap of their big day. We captured the raw emotions, subtle details, and delivered a highlight film that perfectly mirrors their love story.",
                images: imagesPlaceholder,
            },
            { label: "Beachside Ceremony sds", video: "/hero.mp4", description: "Coming soon", images: imagesPlaceholder },
        ],
    },
    {
        title: "Brand Stories",
        items: [
            {
                label: "John Company Brand Showcase",
                video: "/hero.mp4",
                description:
                    "John's company needed a bold visual narrative to launch their re‑brand. We crafted a punchy brand film highlighting their values and vision.",
                images: imagesPlaceholder,
            },
            {
                label: "Applebees Promo Shoot",
                video: "/hero.mp4",
                description:
                    "A mouth‑watering promo series produced for Applebees to boost social engagement.",
                images: imagesPlaceholder,
            },
        ],
    },
    {
        title: "Social Media",
        items: [
            {
                label: "Restaurant X Social Media Shoot",
                video: "/hero.mp4",
                description:
                    "High‑energy, snack‑size clips optimised for TikTok & Reels that helped Restaurant X double their online reach.",
                images: imagesPlaceholder,
            },
        ],
    },
    {
        title: "Lifestyle",
        items: [
            {
                label: "House Broker Home Shoot",
                video: "/hero.mp4",
                description:
                    "A relaxed lifestyle showcase capturing the warmth of this modern family home.",
                images: imagesPlaceholder,
            },
        ],
    },
] as const;
/* ------------------------------------------------------------------ */

export default function ShowcaseSection() {
    const [activeCat, setActiveCat] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [open, setOpen] = useState(
        () => categories.map(() => true)
    );
    const [drawer, setDrawer] = useState(true);
    const [lightbox, setLightbox] = useState<string | null>(null);

    /* convenience getters with guards */
    const cat = categories[activeCat];
    const item = cat.items[activeItem] ?? cat.items[0];

    /* handlers */
    const toggleCat = (idx: number) => {
        setOpen((prev) => prev.map((o, i) => (i === idx ? !o : o)));

    }

    return (
        <section id="showcase" className="min-h-screen h-full flex bg-black text-cream overflow-hidden">
            {/* ───────── Left side nav ───────── */}
            {/* close button (mobile only) */}
            <div className="fixed md:hidden cursor-pointer text-second transition-all duration-300 left-5 z-100 flex " onClick={() => setDrawer(!drawer)}>
                <svg
                    className={cn(
                        "fixed md:hidden cursor-pointer text-second transition-all duration-300 left-5 text-shadow-lg/50 z-100 ",
                        drawer ? "rotate-90 translate-x-50 h-5 w-5 top-[53px]" : "rotate-0 h-8 w-8 top-14"
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"

                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>


                <p className={`${drawer ? "opacity-0" : "opacity-100"} text-shadow-lg/50 fixed md:hidden cursor-pointer hover:-translate-y-1 text-second transition-all duration-300 left-12 z-100 top-15`}>Menu</p>



            </div>
            <svg
                className={cn(
                    "fixed md:hidden h-8 w-8 cursor-pointer text-second transition-all duration-300 top-15 left-5 z-100 -rotate-90",
                    drawer ? "opacity-100 translate-x-50 h-5 w-5" : "opacity-0 h-8 w-8"
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                onClick={() => setDrawer(!drawer)}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>

            <div className="md:w-70 md:h-screen" />
            <aside
                className={cn(
                    "w-70 shrink-0 border-r border-zinc-800 px-4 py-20 h-screen overflow-y-auto bg-black ",
                    "transition-transform duration-300",
                    "md:translate-x-0 fixed",
                    drawer ? "translate-x-0 fixed z-50"
                        : "translate-x-[-100%] fixed z-50"
                )}
            >


                <div className="">
                    <h1 className=" text-xl">Our Services</h1>
                    <hr className="mb-4 rounded-xl h-[1.5px]" />
                    {categories.map((c, cIdx) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.05 + 0.2 }}
                            className="w-full"
                        >
                            {/* header row */}
                            <button
                                onClick={() => toggleCat(cIdx)}
                                className="w-full flex items-center justify-between py-2"
                            >
                                <AnimatedUnderlineLink
                                    href="#"
                                    active={activeCat === cIdx}
                                    duration={300}
                                    hover={false}
                                    thickness={1}>
                                    <span
                                        className={cn(
                                            " transition-all duration-300",
                                            activeCat === cIdx
                                                ? "bg-gradient-to-r from-sky-50 to-gray-500 bg-clip-text text-transparent transition-all duration-300"
                                                : "text-secon font-base transition-all duration-300"
                                        )}
                                    >
                                        {c.title}
                                    </span>
                                </AnimatedUnderlineLink>

                                {/* triangle chevron */}
                                <svg
                                    className={cn(
                                        "h-3 w-3 text-cream transition-transform",
                                        open[cIdx] ? "rotate-90" : "rotate-0"
                                    )}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* sub list */}
                            <AnimatePresence initial={false}>
                                {open[cIdx] && (
                                    <motion.ul
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { height: "auto", opacity: 1 },
                                            collapsed: { height: 0, opacity: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="pl-4 overflow-hidden"
                                    >
                                        {c.items.map((it, iIdx) => (
                                            <li key={it.label}>
                                                <AnimatedUnderlineLink
                                                    href="#"
                                                    active={activeCat === cIdx && activeItem === iIdx}
                                                    duration={300}
                                                    thickness={1}

                                                >
                                                    <span
                                                        className={cn(
                                                            "block py-1 text-sm transition-transform",
                                                            activeCat === cIdx && activeItem === iIdx &&
                                                            "translate-x-1 text-primary font-bold"
                                                        )}
                                                        onClick={() => {
                                                            setActiveCat(cIdx);
                                                            setActiveItem(iIdx);
                                                            if (drawer) {
                                                                setDrawer(false)
                                                            }
                                                        }}
                                                    >
                                                        {it.label}
                                                    </span>
                                                </AnimatedUnderlineLink>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </aside>

            {/* ───────── Right side content ───────── */}
            <main className="flex-1  py-12 px-6 md:px-12 overflow-y-auto" onClick={() => { if (drawer) { setDrawer(false) } }}>

                <motion.h2
                    key={item.label + "title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" text-center mt-10 text-2xl md:text-4xl font-bold mb-6 z-0"
                >
                    {item.label}
                </motion.h2>

                <motion.div
                    key={item.label + "video"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-full overflow-hidden rounded-lg shadow-lg mb-6"
                >
                    <video
                        src={item.video}
                        playsInline
                        loop
                        muted
                        autoPlay
                        className="w-full h-[320px] md:h-[420px] object-cover"
                    />
                </motion.div>

                <p className="max-w-2xl mb-10 text-base md:text-lg text-zinc-300">
                    {item.description}
                </p>

                <ParallaxScroll images={item.images} className="cursor-pointer" />
            </main>

            {/* lightbox unchanged */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur flex items-center justify-center z-50"
                        onClick={() => setLightbox(null)}
                    >
                        <img src={lightbox} alt="expanded" className="max-h-[90vh] max-w-[90vw] rounded-lg" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}