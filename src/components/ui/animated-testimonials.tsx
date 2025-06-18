"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";  // use the real package name
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials = [],     // default to empty array
    autoplay = false,
}: {
    testimonials?: Testimonial[];
    autoplay?: boolean;
}) => {
    /* ─── HOOKS (always called) ──────────────────────────────────────────────── */
    const [active, setActive] = useState(0);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        if (!autoplay || testimonials.length === 0) return;
        const id = setInterval(handleNext, 5000);
        return () => clearInterval(id);
    }, [autoplay, testimonials.length, handleNext]);
    /* ────────────────────────────────────────────────────────────────────────── */

    /* Early exit *after* hooks have been registered */
    if (testimonials.length === 0) return null;

    /** Returns a random integer in the range [-10, 10] */
    const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

    /* Split quote into words & whitespace blocks for staggered animation */
    const quoteParts = testimonials[active].quote.match(/\S+|\s+/g) ?? [];

    return (
        <div className="mx-auto max-w-sm px-4 sm:py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-0 sm:gap-20 md:grid-cols-2">
                {/* Image column */}
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence initial={false}>
                            {testimonials.map((t, index) => (
                                <motion.div
                                    key={t.src + index}
                                    initial={{ opacity: 0, scale: 0.9, rotateY: randomRotateY() }}
                                    animate={{
                                        opacity: index === active ? 1 : 0.7,
                                        scale: index === active ? 1 : 0.95,
                                        zIndex: index === active ? 40 : testimonials.length - index,
                                        y: index === active ? [0, -80, 0] : 0,
                                        rotateY: index === active ? 0 : randomRotateY(),
                                    }}
                                    exit={{ opacity: 0, scale: 0.9, rotateY: randomRotateY() }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0 origin-bottom flex items-center justify-center"
                                >
                                    <Image
                                        src={t.src}
                                        alt={t.name}
                                        width={200}
                                        height={200}
                                        className="h-[50%] w-[50%] sm:h-full sm:w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Text column */}
                <div className="flex flex-col justify-between -mt-10 sm:mt-0 sm:py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold text-black dark:text-white">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>

                        {/* Quote with word-by-word blur-in */}
                        <motion.p className="sm:mt-8 text-lg text-black dark:text-neutral-300">
                            {quoteParts.map((part, i) =>
                                /\s+/.test(part) ? (
                                    <React.Fragment key={`s-${i}`}>
                                        {part.replace(/ /g, "\u00A0")}
                                    </React.Fragment>
                                ) : (
                                    <motion.span
                                        key={`w-${i}`}
                                        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                            delay: 0.02 * i,
                                        }}
                                        className="inline-block"
                                    >
                                        {part}
                                    </motion.span>
                                )
                            )}
                        </motion.p>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex gap-4 pt-4 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="group flex h-7 w-7 items-center justify-center rounded-full border border-prime dark:border-second"
                        >
                            <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover:rotate-12 dark:text-second" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group flex h-7 w-7 items-center justify-center rounded-full border border-prime dark:border-second"
                        >
                            <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover:-rotate-12 dark:text-second" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
