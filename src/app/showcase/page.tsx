"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Assuming you've set up next-intl and have a navigation.ts file
// If so, Link should come from there for proper localization.
// import { Link } from '@/navigation'; // Use this if next-intl is fully set up
import Link from "next/link"; // Using standard Next.js Link for now if i18n isn't on this page yet

import { ParallaxScroll } from "@/components/ui/parallax-scroll"; // Ensure this component is updated for readonly string[]
import { cn } from "@/lib/utils";
import { AnimatedUnderlineLink } from "@/components/ui/animate-underline";
import YouTubeEmbed from "@/lib/youtubeVideo";
// import { useTranslations } from 'next-intl'; // Uncomment if you add translations

/* ------------------------------------------------------------------
   Mock data – replace with real projects later
   The `as const` assertion makes the array and its contents deeply readonly.
   This is good for type safety but requires components consuming this data
   (like ParallaxScroll) to be aware they might receive readonly arrays.
---------------------------------------------------------------------*/
const imagesPlaceholder = [
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
] as const; // Added 'as const' here too for consistency if these are truly fixed

const categories = [
    {
        title: "Brand Stories",
        // titleKey: "showcase.categories.brandStories.title" // Example for i18n
        items: [
            {
                label: "WebDesign By Hand",
                // labelKey: "showcase.categories.brandStories.items.webDesignByHand.label"
                video: `3S8BE5M0fI0`,
                description:
                    "Our client requested a impactful flagship film of their webdesign business.",
                // descriptionKey: "..."
                points: [
                    "Script development & storyboarding",
                    "Full day shoot with gimbal & slider",
                    "Dynamic interview style edit",
                ],
                // pointsKeys: ["...", "..."]
                images: imagesPlaceholder, // Using placeholder, assuming these are valid paths
            },
        ],
    },
    {
        title: "Lifestyle",
        items: [
            {
                label: "Keanu BBQ Event",
                video: "y_oWn83xevQ",
                description:
                    "Our client wanted a memorable lifestyle film capturing the warmth of a special bbq event.",
                points: [
                    "Capture the unique atmosphere and key moments of the BBQ event.",
                    "Highlight guest interactions, food, and overall enjoyment.",
                    "Produce a heartwarming and engaging lifestyle film.",
                    "Deliver a polished video suitable for sharing on social media.",
                ],
                images: imagesPlaceholder, // Using placeholder
            },
        ],
    },
    {
        title: "Social Media",
        items: [
            {
                label: "Coming Soon",
                video: "",
                description:
                    "High‑energy snack‑size clips optimised for Reels & TikTok, boosting reach 2×.",
                points: [
                    "Vertical framing from capture to delivery",
                    "Caption & hashtag research for maximum organic lift",
                    "Trending‑sound integration cleared for commercial use",
                ],
                images: [], // For "Coming Soon", images are not shown, CTA is used instead.
            },
        ],
    },
    {
        title: "Weddings",
        items: [
            {
                label: "Coming Soon",
                video: "",
                description:
                    "An intimate cinematic recap that captures every emotion of Jason & Jina’s big day.",
                points: [
                    "Full‑day coverage from bridal prep to dance‑floor finale",
                    "4‑minute highlight film delivered in 4K HDR",
                    "Drone establishing shots of the vineyard venue",
                    "Social‑media teaser within 48 hours",
                ],
                images: [], // For "Coming Soon"
            }
        ],
    },
] as const;
/* ------------------------------------------------------------------ */

export default function ShowcaseSection() {
    // const t = useTranslations('ShowcasePage'); // Uncomment and use if you add translations

    const [activeCat, setActiveCat] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [open, setOpen] = useState(() => categories.map(() => true));
    const [drawer, setDrawer] = useState(false); // Default to closed on mobile, true on desktop
    const [lightbox, setLightbox] = useState<string | null>(null);

    // Effect to set drawer state based on screen size (optional improvement)
    // useEffect(() => {
    //    const handleResize = () => {
    //        if (window.innerWidth >= 1024) { // lg breakpoint
    //            setDrawer(true); // Keep open on desktop
    //        } else {
    //            setDrawer(false); // Default to closed on mobile
    //        }
    //    };
    //    handleResize(); // Set initial state
    //    window.addEventListener('resize', handleResize);
    //    return () => window.removeEventListener('resize', handleResize);
    // }, []);


    const cat = categories[activeCat];
    const currentItem = cat.items[activeItem] ?? cat.items[0]; // Ensure currentItem is always defined

    const toggleCat = (idx: number) => {
        setOpen((prev) => prev.map((o, i) => (i === idx ? !o : o)));
    };

    const handleItemClick = (catIdx: number, itemIdx: number) => {
        setActiveCat(catIdx);
        setActiveItem(itemIdx);
        if (window.innerWidth < 1024) { // Close drawer on mobile after selection
            setDrawer(false);
        }
    };

    const validImages = currentItem.images?.filter(img => img && img.trim() !== "") ?? [];

    return (
        <section id="showcase" className="min-h-screen h-full flex dark:bg-black bg-second dark:text-second text-black overflow-hidden">
            {/* Left side nav */}
            {/* Mobile Nav Toggle Button */}
            <div
                className="fixed md:hidden cursor-pointer dark:text-second text-black transition-all duration-300 left-4 top-4 z-[60] p-2" // Increased tap area
                onClick={() => setDrawer(!drawer)}
                aria-label={drawer ? "Close menu" : "Open menu"}
                role="button"
                tabIndex={0}
            >
                {/* Icon changes based on drawer state */}
                {drawer ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                {!drawer && <span className="sr-only">Open Menu</span>} {/* Screen reader text */}
            </div>


            {/* Sidebar Navigation */}
            <aside
                className={cn(
                    "w-72 shrink-0 border-r border-zinc-300 dark:border-zinc-800 px-4 pt-24 pb-10 h-screen overflow-y-auto",
                    "fixed top-0 left-0 z-50 bg-second dark:bg-black", // Ensure it's fixed and has background
                    "transition-transform duration-300 ease-in-out",
                    "lg:translate-x-0 lg:static lg:bg-transparent lg:dark:bg-transparent", // Static on desktop
                    drawer ? "translate-x-0 dark:bg-black/90 bg-second/95" : "-translate-x-full"
                )}
            >
                <div className="lg:sticky lg:top-24"> {/* Make content sticky within aside on desktop */}
                    <h1 className="text-xl font-semibold mb-1">
                        {/* {t('ourShowcaseTitle', {defaultValue: "Our Showcase"})} */}
                        Our Showcase
                    </h1>
                    <hr className="mb-4 rounded-xl h-[1.5px] border-zinc-300 dark:border-zinc-700" />
                    {categories.map((c, cIdx) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: cIdx * 0.05 + 0.2 }}
                            className="w-full mb-2"
                        >
                            <button
                                onClick={() => toggleCat(cIdx)}
                                className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md px-2"
                                aria-expanded={open[cIdx]}
                            >
                                <AnimatedUnderlineLink
                                    href="#" // This link doesn't navigate, consider removing if only for style
                                    active={activeCat === cIdx}
                                    duration={300}
                                    hover={false}
                                    thickness={1}
                                >
                                    <span
                                        className={cn(
                                            "font-medium transition-all duration-300",
                                            activeCat === cIdx
                                                ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
                                                : "text-black dark:text-second"
                                        )}
                                    >
                                        {c.title}
                                        {/* {t(c.titleKey, {defaultValue: c.title})} */}
                                    </span>
                                </AnimatedUnderlineLink>
                                <svg
                                    className={cn(
                                        "h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform shrink-0 ml-2",
                                        open[cIdx] ? "rotate-90" : "rotate-0"
                                    )}
                                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <AnimatePresence initial={false}>
                                {open[cIdx] && (
                                    <motion.ul
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { height: "auto", opacity: 1, marginTop: "0.25rem" },
                                            collapsed: { height: 0, opacity: 0, marginTop: "0" },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="pl-4 overflow-hidden"
                                    >
                                        {c.items.map((it, iIdx) => (
                                            <li key={it.label} className="my-1">
                                                <button // Changed to button for semantics, as it triggers an action
                                                    onClick={() => handleItemClick(cIdx, iIdx)}
                                                    className={cn(
                                                        "block w-full text-left py-1 text-sm transition-all duration-200 ease-in-out rounded-md px-2 hover:bg-gray-100 dark:hover:bg-zinc-800",
                                                        "focus:outline-none focus:ring-2 focus:ring-sky-500",
                                                        activeCat === cIdx && activeItem === iIdx
                                                            ? "translate-x-1 text-sky-600 dark:text-sky-400 font-semibold"
                                                            : "text-gray-700 dark:text-gray-300"
                                                    )}
                                                >
                                                    {it.label}
                                                    {/* {t(it.labelKey, {defaultValue: it.label})} */}
                                                </button>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </aside>

            {/* Right side content */}
            <main
                className="flex-1 py-12 px-6 lg:px-12 overflow-y-auto mt-16 md:mt-0" // Add margin-top for mobile fixed header
                onClick={() => { if (drawer && window.innerWidth < 1024) { setDrawer(false); } }}
            >
                <motion.h2
                    key={currentItem.label + "title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-10 text-3xl lg:text-4xl font-bold mb-8 text-black dark:text-second"
                >
                    {currentItem.label}
                    {/* {t(currentItem.labelKey, {defaultValue: currentItem.label})} */}
                </motion.h2>

                {currentItem.video && (
                    <motion.div
                        key={currentItem.label + "video"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl mb-8 aspect-video"
                    >
                        <YouTubeEmbed videoId={currentItem.video} />
                    </motion.div>
                )}

                <motion.div
                    key={currentItem.label + "-details"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: currentItem.video ? 0.2 : 0.1 }}
                    className="max-w-4xl mx-auto mb-8"
                >
                    <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-6 md:space-y-0 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
                        <div className="flex-1">
                            <h3 className="font-semibold text-xl text-black dark:text-second mb-2">
                                {currentItem.label === "Coming Soon"
                                    ? "Coming Soon: What to Expect" // t('comingSoon.whatToExpect', {defaultValue: "Coming Soon: What to Expect"})
                                    : "Client's Request:" // t('clientRequestTitle', {defaultValue: "Client's Request:"})
                                }
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                                {currentItem.description}
                                {/* {t(currentItem.descriptionKey, {defaultValue: currentItem.description})} */}
                            </p>
                        </div>

                        {currentItem.points.length > 0 && (
                            <>
                                <hr className="w-full md:w-px md:h-auto md:min-h-[8rem] border-gray-300 dark:border-zinc-700 my-4 md:my-0 md:mx-4" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-xl text-black dark:text-second mb-2">
                                        {currentItem.label === "Coming Soon"
                                            ? "Key Features You'll See:" // t('comingSoon.keyFeatures', {defaultValue: "Key Features You'll See:"})
                                            : "Our Solution:" // t('ourSolutionTitle', {defaultValue: "Our Solution:"})
                                        }
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-gray-700 dark:text-gray-300">
                                        {currentItem.points.map((pt, index) => (
                                            pt && <li key={`${currentItem.label}-point-${index}`}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Conditional HR or spacing before gallery/CTA */}
                {currentItem.label !== "Coming Soon" && validImages.length > 0 && (
                    <hr className="border-gray-300 dark:border-zinc-700 my-8 max-w-4xl mx-auto" />
                )}
                {currentItem.label === "Coming Soon" && <div className="my-8"></div>}

                <motion.div
                    key={currentItem.label + (currentItem.label === "Coming Soon" ? "-cta-btn" : "-gallery")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    {currentItem.label === "Coming Soon" ? (
                        <div className="text-center py-6">
                            <p className="mb-6 text-lg text-black dark:text-second">
                                {/* {t('comingSoon.ctaText', { service: cat.title.toLowerCase(), defaultValue: `Excited about our upcoming ${cat.title.toLowerCase()} services? Let's discuss how we can tailor them for you.` })} */}
                                Excited about our upcoming {cat.title.toLowerCase()} services? Let&apos;s discuss how we can tailor them for you.
                            </p>
                            <Link
                                href="/contact" // Use localized Link if next-intl is active
                                onClick={() => {
                                    if (drawer && window.innerWidth < 1024) {
                                        setDrawer(false);
                                    }
                                }}
                                className="inline-block text-white bg-sky-600 hover:bg-sky-700 dark:text-black dark:bg-sky-400 dark:hover:bg-sky-500 font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                            >
                                {/* {t('scheduleCallButton', {defaultValue: "Schedule a Call"})} */}
                                Schedule a Call
                            </Link>
                        </div>
                    ) : (
                        validImages.length > 0 && (
                            <ParallaxScroll
                                images={validImages} // Pass the filtered array
                            />
                        )
                    )}
                </motion.div>
            </main>

            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100]" // Increased z-index
                        onClick={() => setLightbox(null)}
                    >
                        {/* Improved Image handling in lightbox */}
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
                        >
                            <Image
                                src={lightbox}
                                alt="Expanded showcase image"
                                layout="intrinsic" // Use intrinsic or fill depending on desired behavior
                                width={1200} // Provide base width
                                height={800} // Provide base height
                                objectFit="contain" // Ensures the whole image is visible
                                className="rounded-lg"
                            />
                        </motion.div>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}