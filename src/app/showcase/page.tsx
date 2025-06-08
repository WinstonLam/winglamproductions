"use client";

import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";
import YouTubeEmbed from "@/lib/youtubeVideo";

const imagesPlaceholder = [
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
    `/hero.png`,
] as const;

const categories = [
    {
        title: "Brand Stories",
        items: [
            {
                label: "WebDesign By Hand",
                video: `3S8BE5M0fI0`,
                description:
                    "Our client requested a impactful flagship film of their webdesign business.",
                points: [
                    "Script development & storyboarding",
                    "Full day shoot with gimbal & slider",
                    "Dynamic interview style edit",
                ],
                images: imagesPlaceholder,
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
                images: imagesPlaceholder,
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
                images: [],
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
                images: [],
            }
        ],
    },
] as const;

export default function ShowcaseSection() {
    // const t = useTranslations('ShowcasePage');

    const [activeCat, setActiveCat] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [openCategories, setOpenCategories] = useState(() => categories.map(() => true)); // Renamed for clarity
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
    const [lightbox, setLightbox] = useState<string | null>(null);

    const cat = categories[activeCat];
    const currentItem = cat.items[activeItem] ?? cat.items[0];

    const toggleCategory = (idx: number) => {
        setOpenCategories((prev) => prev.map((o, i) => (i === idx ? !o : o)));
    };

    const handleItemClick = (catIdx: number, itemIdx: number) => {
        setActiveCat(catIdx);
        setActiveItem(itemIdx);
        if (window.innerWidth < 1024) {
            setIsMobileMenuOpen(false); // Close mobile menu on item selection
        }
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen && window.innerWidth < 1024) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { // Cleanup function
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);


    const validImages = currentItem.images?.filter(img => img && img.trim() !== "") ?? [];

    return (
        <section id="showcase" className="min-h-screen h-full flex flex-col lg:flex-row dark:bg-black bg-second dark:text-second text-black overflow-hidden relative"> {/* Added relative for overlay */}

            {/* Overlay for when mobile menu is open */}
            {isMobileMenuOpen && window.innerWidth < 1024 && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Nav Toggle Button - Positioned absolutely within the section or fixed to viewport */}
            <button
                className={`lg:hidden fixed z-[60] p-2 top-20 rounded-full border border-black dark:border-second 
                    transition-all duration-300 h-[30px] flex items-center justify-center
                    text-black dark:text-second bg-second dark:bg-black
                    ${isMobileMenuOpen ? "left-60 " : "left-5 "}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-showcase-sidebar"
            >
                {isMobileMenuOpen ? (
                    <h1 className="font-semibold ">X </h1>
                ) : (
                    <h1 className="font-semibold ">View More</h1>
                )}
            </button>

            {/* Sidebar Navigation */}
            <aside
                id="mobile-showcase-sidebar"
                className={cn(
                    "w-72 shrink-0 border-r border-zinc-300 dark:border-zinc-800 px-4 pt-20 pb-10 h-screen overflow-y-auto",
                    "fixed top-0 left-0 z-50 bg-second dark:bg-black", // Always fixed for mobile overlay behavior
                    "transition-transform duration-300 ease-in-out",
                    "lg:sticky lg:top-0 lg:pt-24 lg:h-screen lg:translate-x-0", // Desktop: sticky, specific padding, full height, always visible
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full" // Mobile: slide in/out
                )}
            >
                {/* Desktop: Content sticks to top after header. Mobile: Content starts after some padding. */}
                <div className="lg:sticky lg:top-24">
                    <h1 className="text-xl font-semibold mb-1 text-black dark:text-second">
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
                                onClick={() => toggleCategory(cIdx)}
                                className="w-full flex items-center justify-between py-2 text-left hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md px-2"
                                aria-expanded={openCategories[cIdx]}
                            >
                                {/* AnimatedUnderlineLink can be tricky with buttons, ensure it doesn't break semantics */}
                                <span // Changed to span for direct styling, AnimatedUnderlineLink might be overkill if not navigating
                                    className={cn(
                                        "font-medium transition-all duration-300",
                                        activeCat === cIdx
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
                                            : "text-black dark:text-second"
                                    )}
                                >
                                    {c.title}
                                </span>
                                <svg
                                    className={cn(
                                        "h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform shrink-0 ml-2",
                                        openCategories[cIdx] ? "rotate-90" : "rotate-0"
                                    )}
                                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <AnimatePresence initial={false}>
                                {openCategories[cIdx] && (
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
                                                <button
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
                className={cn(
                    "flex-1 py-12 px-6 lg:px-12 overflow-y-auto",
                    "lg:pt-24", // Desktop: padding top to account for sticky header or general layout
                    "pt-20" // Mobile: padding top to account for fixed mobile menu button
                )}
            // Removed main onClick that was closing the drawer, as the overlay handles it now
            >
                <motion.h2
                    key={currentItem.label + "title"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-3xl lg:text-4xl font-bold mb-8 text-black dark:text-second"
                >
                    {currentItem.label}
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
                                    ? "Coming Soon: What to Expect"
                                    : "Client's Request:"
                                }
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                                {currentItem.description}
                            </p>
                        </div>

                        {currentItem.points.length > 0 && (
                            <>
                                <hr className="w-full md:w-px md:h-auto md:min-h-[8rem] border-gray-300 dark:border-zinc-700 my-4 md:my-0 md:mx-4" />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-xl text-black dark:text-second mb-2">
                                        {currentItem.label === "Coming Soon"
                                            ? "Key Features You'll See:"
                                            : "Our Solution:"
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
                                Excited about our upcoming {cat.title.toLowerCase()} services? Let&apos;s discuss how we can tailor them for you.
                            </p>
                            <Link
                                href="/contact"
                                onClick={() => {
                                    if (isMobileMenuOpen && window.innerWidth < 1024) {
                                        setIsMobileMenuOpen(false)
                                    }
                                }}
                                className="inline-block text-white bg-sky-600 hover:bg-sky-700 dark:text-black dark:bg-sky-400 dark:hover:bg-sky-500 font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                            >
                                Schedule a Call
                            </Link>
                        </div>
                    ) : (
                        validImages.length > 0 && (
                            <ParallaxScroll
                                images={validImages}
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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100]"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightbox}
                                alt="Expanded showcase image"
                                layout="intrinsic"
                                width={1200}
                                height={800}
                                objectFit="contain"
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