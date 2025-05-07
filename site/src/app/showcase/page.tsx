"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";
import { AnimatedUnderlineLink } from "@/components/ui/animate-underline";
import { prefix } from "@/lib/prefix";

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
                label: "Jason & Jina Wedding",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "An intimate cinematic recap that captures every emotion of Jason & Jina’s big day.",
                points: [
                    "Full‑day coverage from bridal prep to dance‑floor finale",
                    "4‑minute highlight film delivered in 4K HDR",
                    "Drone establishing shots of the vineyard venue",
                    "Social‑media teaser within 48 hours",
                ],
                images: imagesPlaceholder,
            },
            {
                label: "Beachside Ceremony",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "A sun‑kissed wedding film that celebrates a laid‑back coastal love story.",
                points: [
                    "Golden‑hour couple shoot with steadicam",
                    "Live audio capture of handwritten vows",
                    "Aerial pass of the shoreline location",
                ],
                images: imagesPlaceholder,
            },
        ],
    },
    {
        title: "Brand Stories",
        items: [
            {
                label: "John Co. Re‑brand Showcase",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "A punchy brand film launching John Co.’s new identity and core values.",
                points: [
                    "Script development & storyboarding",
                    "Two‑day multi‑location shoot with gimbal & slider",
                    "Animated logo stingers & motion graphics",
                    "Web‑optimised cut‑downs for landing pages",
                ],
                images: imagesPlaceholder,
            },
            {
                label: "Applebees Promo Series",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "A mouth‑watering promo series that doubled Applebees’ social engagement.",
                points: [
                    "Recipe‑driven hero video & 6×15 s TikTok edits",
                    "Audio sweetening with sizzling Foley effects",
                    "Colour grade to emphasise brand palette",
                ],
                images: imagesPlaceholder,
            },
        ],
    },
    {
        title: "Social Media",
        items: [
            {
                label: "Restaurant X Short‑form Push",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "High‑energy snack‑size clips optimised for Reels & TikTok, boosting reach 2×.",
                points: [
                    "Vertical framing from capture to delivery",
                    "Caption & hashtag research for maximum organic lift",
                    "Trending‑sound integration cleared for commercial use",
                ],
                images: imagesPlaceholder,
            },
        ],
    },
    {
        title: "Lifestyle",
        items: [
            {
                label: "Ashbourne Estate Showcase",
                video: `${prefix}/media/hero.mp4`,
                description:
                    "A relaxed lifestyle film capturing the warmth of this modern family home.",
                points: [
                    "Articulate the vision of the Ashbourne project to potential buyers",
                    "Foster connectivity between the estate and the wider Southern Highlands",
                    "Showcase regional lifestyle offerings through monthly event videos",
                    "Encourage buyers to make a tree‑change",
                ],
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
        <section id="showcase" className="min-h-screen h-full flex dark:bg-black bg-second dark:text-second text-black text-black overflow-hidden">
            {/* ───────── Left side nav ───────── */}
            {/* close button (mobile only) */}
            <div className="fixed md:hidden cursor-pointer dark:text-second text-black transition-all duration-300 left-5 z-100 flex " onClick={() => setDrawer(!drawer)}>
                <svg
                    className={cn(
                        "fixed md:hidden cursor-pointer dark:text-second text-black transition-all duration-300 left-5 text-shadow-lg/50 z-100 ",
                        drawer ? "rotate-90 translate-x-50 h-5 w-5 top-[53px]" : "rotate-0 h-8 w-8 top-14"
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"

                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>


                <p className={`${drawer ? "opacity-0" : "opacity-100"} dark:text-shadow-lg/50 text-shadow-lg/10 fixed lg:hidden cursor-pointer hover:-translate-y-1 dark:text-second text-black transition-all duration-300 left-12 z-100 top-15`}>Menu</p>



            </div>
            <svg
                className={cn(
                    "fixed md:hidden h-8 w-8 cursor-pointer dark:text-second text-black transition-all duration-300 top-15 left-5 z-100 -rotate-90",
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

            <div className="lg:w-70 lg:h-screen bg-second" />
            <aside
                className={cn(
                    "w-70 shrink-0 border-r border-zinc-800 px-4 py-20 h-screen overflow-y-auto bg-black ",
                    "transition-transform duration-300",
                    "lg:translate-x-0 fixed z-50 bg-second dark:bg-black",
                    drawer ? "translate-x-0 dark:bg-black/80 bg-second/90 lg:bg-second lg:dark:bg-black"
                        : "translate-x-[-100%]"
                )}
            >


                <div className="">
                    <h1 className=" text-xl">Our Showcase</h1>
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
                                                ? "dark:bg-gradient-to-r from-sky-50 to-gray-500 dark:bg-clip-text dark:text-transparent text-black transition-all duration-300"
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
            <main className="flex-1  py-12 px-6 lg:px-12 overflow-y-auto" onClick={() => { if (drawer) { setDrawer(false) } }}>

                <motion.h2
                    key={item.label + "title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" text-center mt-10 text-2xl lg:text-4xl font-bold mb-6 z-0 "
                >
                    {item.label}
                </motion.h2>

                <motion.div
                    key={item.label + "video"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}>
                    <div className="flex flex-col sm:flex-row items-start ">
                        {/* description */}
                        <div className="flex flex-col  w-[40%] mt-4 mb-4 md:mt-0 md:mb-0">
                            <h2 className="font-semibold text-xl">Client&apos;s Request:</h2>
                            <p className="max-w-2xl text-base  md:text-lg  dark:text-second text-black">
                                {item.description}
                            </p>
                        </div>


                        {/* vertical rule */}
                        <hr className="rotate-180 border-0 bg-black dark:bg-second w-px hidden sm:block h-40 mt-2 mr-10 ml-5 rounded-full mb-6" />

                        {/* points */}
                        <ul className="max-w-2xl list-disc list-inside space-y-1 text-base mt-4 mb-4 md:mt-0 md:mb-0 md:text-lg text-zinc-300 ">
                            <h2 className="font-semibold text-xl dark:text-second text-black">Our Solution:</h2>
                            {item.points.map((pt) => (
                                <li className="dark:text-second text-black" key={pt}>{pt}</li>
                            ))}
                        </ul>
                    </div>

                    <hr className="bg-second rounded-full mb-10" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}>
                    <ParallaxScroll images={item.images} className="cursor-pointer" />
                </motion.div>
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
                        <Image src={lightbox} alt="expanded" className="max-h-[90vh] max-w-[90vw] rounded-lg" width={500} height={500} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}