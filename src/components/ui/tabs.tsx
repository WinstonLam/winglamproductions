'use client';

import { useState, useEffect } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type Tab = { title: string; value: string; content: React.ReactNode };

/* ───── helper: detect < 640 px ───── */
function useIsMobile(breakpoint = 775) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(`(max-width:${breakpoint}px)`);
        const handle = () => setIsMobile(mq.matches);
        handle();
        mq.addEventListener?.('change', handle);
        return () => mq.removeEventListener?.('change', handle);
    }, [breakpoint]);

    return isMobile;
}

const HOVER_SHIFT = 45; // desktop only

/* ───────────────── component ───────────────── */
export function Tabs({
    tabs,
    containerClassName,
    tabButtonClassName,
    activeButtonClassName,
    panelClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    tabButtonClassName?: string;
    activeButtonClassName?: string;
    panelClassName?: string;
}) {
    const isMobile = useIsMobile();
    const [activeIdx, setActiveIdx] = useState(0);
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);

    /* choose rendering strategy */
    const stackedTabs = isMobile
        ? [tabs[activeIdx]] // just the active one
        : [tabs[activeIdx], ...tabs.filter((_, i) => i !== activeIdx)];

    return (
        <div className={cn('w-full', containerClassName)}>
            {/* ───────── TAB BAR ───────── */}
            <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-3 overflow-x-auto sm:overflow-visible">
                {tabs.map((t, i) => (
                    <button
                        key={t.value}
                        onClick={() => setActiveIdx(i)}
                        onMouseEnter={() => !isMobile && setHoverIdx(i)}
                        onMouseLeave={() => !isMobile && setHoverIdx(null)}
                        className={cn(
                            'relative px-4 py-2 rounded-full transition-all duration-300 text-second',
                            tabButtonClassName,
                            i === activeIdx && activeButtonClassName
                        )}
                    >
                        {t.title}

                        {/* sliding active pill */}
                        {i === activeIdx && (
                            <motion.span
                                layoutId="pill"
                                className="absolute inset-0 -z-20 rounded-full bg-zinc-800"
                                transition={{ type: 'spring', bounce: 0.35, duration: 0.6 }}
                            />
                        )}

                        {/* hover pill – desktop only */}
                        {!isMobile && hoverIdx === i && activeIdx !== i && (
                            <motion.span
                                layoutId="hover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 -z-10 rounded-full bg-zinc-700/70"
                                transition={{ duration: 0.25 }}
                            />
                        )}
                    </button>
                ))}

            </div>

            {/* ───────── PANELS ───────── */}
            <div className="relative mt-4 md:mt-20 h-[20rem] sm:h-[26rem] md:h-[40rem]">
                {isMobile ? (
                    /* mobile → single panel, slide‑up/down */
                    <AnimatePresence mode="wait">
                        <CardPanel
                            key={tabs[activeIdx].value}
                            tab={tabs[activeIdx]}
                            idx={0}
                            hovering={false}
                            isMobile
                            panelClassName={panelClassName}
                        />
                    </AnimatePresence>
                ) : (
                    /* desktop → stacked layout */
                    <LayoutGroup id="card-stack">
                        {stackedTabs.map((tab, i) => (
                            <CardPanel
                                key={tab.value}
                                tab={tab}
                                idx={i}
                                hovering={hoverIdx !== null}
                                isMobile={false}
                                panelClassName={panelClassName}
                            />
                        ))}
                    </LayoutGroup>
                )}
            </div>
        </div>
    );
}

/* ───────── CARD PANEL ───────── */
function CardPanel({
    tab,
    idx,
    hovering,
    isMobile,
    panelClassName,
}: {
    tab: Tab;
    idx: number;
    hovering: boolean;
    isMobile: boolean;
    panelClassName?: string;
}) {
    const variants = isMobile ? mobileCardVariants : desktopCardVariants;
    return (
        <motion.div
            layout={!isMobile}
            layoutId={tab.value}
            custom={{ idx, hovering }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ zIndex: 100 - idx }}
            className={cn(
                'absolute inset-0 rounded-xl overflow-hidden shadow-lg flex items-start',
                panelClassName
            )}
        >
            {tab.content}
        </motion.div>
    );
}

/* ───────── VARIANTS ───────── */
const desktopCardVariants = {
    initial: ({ idx }: { idx: number }) => ({ scale: 1 - idx * 0.07 }),
    animate: ({ idx, hovering }: { idx: number; hovering: boolean }) => ({
        scale: 1 - idx * 0.07,
        y: hovering ? -idx * HOVER_SHIFT : 0,
        opacity: idx < 4 ? 1 - idx * 0.1 : 0,
        transition: {
            scale: { type: 'spring', stiffness: 300, damping: 30 },
            y: { type: 'spring', stiffness: 300, damping: 30 },
        },
    }),
    exit: { opacity: 0 },
};

const mobileCardVariants = {
    initial: { y: '10%', opacity: 0 },
    animate: {
        y: '0%',
        opacity: 1,
        transition: { type: 'tween', duration: 0.35 },
        ease: 'easeInOut',
    },
    exit: {
        y: '10%',
        opacity: 0,
        transition: { type: 'tween', duration: 0.3 },
        ease: 'easeIn'
    },
};
