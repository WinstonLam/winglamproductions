"use client";

import { useRef, useState, MouseEvent } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    /* ▸ parallax refs / transforms
    -------------------------------------------------------------------------- */
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateA = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateB = useTransform(scrollYProgress, [0, 1], [0, 200]);

    /* ▸ modal state
    -------------------------------------------------------------------------- */
    const [activeSrc, setActiveSrc] = useState<string | null>(null);

    /* ▸ helpers
    -------------------------------------------------------------------------- */
    const open = (src: string) => setActiveSrc(src);
    const close = () => setActiveSrc(null);

    /* prevent bubbling so a click inside the image
       does not close the modal when overlay is clicked */
    const stop = (e: MouseEvent) => e.stopPropagation();

    /* ▸ slice images into two columns
    -------------------------------------------------------------------------- */
    const half = Math.ceil(images.length / 2);
    const colA = images.slice(0, half);
    const colB = images.slice(half);

    return (
        <>
            {/* SCROLLABLE GRID */}
            <div
                ref={gridRef}
                className={cn(
                    "h-[40rem] w-full overflow-y-auto flex items-start justify-start",
                    className
                )}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 max-w-4xl mx-auto pb-10 px-10">
                    {/* left column */}
                    <div className="grid gap-5 md:gap-10">
                        {colA.map((src, i) => (
                            <motion.div
                                style={{ y: translateA }}
                                key={`colA-${i}`}
                                onClick={() => open(src)}
                                className="cursor-pointer"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="h-80 w-full object-cover rounded-lg hover:-translate-y-5 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* right column */}
                    <div className="grid gap-5 md:gap-10">
                        {colB.map((src, i) => (
                            <motion.div
                                style={{ y: translateB }}
                                key={`colB-${i}`}
                                onClick={() => open(src)}
                                className="cursor-pointer"
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="h-80 w-full object-cover rounded-lg -translate-y-30 md:-translate-y-0 hover:-translate-y-5 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* MODAL OVERLAY */}
            <AnimatePresence>
                {activeSrc && (
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
                            key="modal"
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
                                className="absolute w-8 h-8 right-4 cursor-pointer top-3 rounded-full bg-white/90 text-black hover:bg-white shadow-md p-1 transition-all duration-300"
                            >
                                ✕
                            </button>

                            <img
                                src={activeSrc}
                                alt="enlarged"
                                className="w-full h-full object-contain rounded-lg "
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
