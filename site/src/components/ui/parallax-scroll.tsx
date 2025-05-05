// components/ui/parallax-scroll.tsx
"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateA = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateB = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const half = Math.ceil(images.length / 2);
    const colA = images.slice(0, half);
    const colB = images.slice(half);

    return (
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
                        <motion.div style={{ y: translateA }} key={`colA-${i}`}>
                            <img
                                src={src}
                                alt=""
                                className="h-80 w-full object-cover rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* right column */}
                <div className="grid gap-5 md:gap-10">
                    {colB.map((src, i) => (
                        <motion.div style={{ y: translateB }} key={`colB-${i}`}>
                            <img
                                src={src}
                                alt=""
                                className="h-80 w-full object-cover rounded-lg -translate-y-30 md:-translate-y-0"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
