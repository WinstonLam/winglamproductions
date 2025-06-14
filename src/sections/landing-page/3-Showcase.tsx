'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';

/* ────────────────────────────
   Types
   ──────────────────────────── */

interface Project {
    titleKey: string;
    id: string;
}

interface RawTestimonial {
    quoteKey: string;
    nameKey: string;
    designationKey: string;
    src: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
}

/** Narrowing helper: tells TS when a testimonial still carries *Key fields */
function isRaw(t: RawTestimonial | Testimonial): t is RawTestimonial {
    return 'quoteKey' in t;
}

/* ────────────────────────────
   Data
   ──────────────────────────── */

const projects: Project[] = [
    { titleKey: 'showcase.projectJohnsBurgers', id: 'johns-burgers' },
    { titleKey: 'showcase.projectLotusYoga', id: 'lotus-yoga' },
    { titleKey: 'showcase.projectAuroraTech', id: 'aurora-tech' },
    { titleKey: 'showcase.projectVintageWheels', id: 'vintage-wheels' },
];

const testimonials: (RawTestimonial | Testimonial)[] = [
    /* needs translation */
    {
        quoteKey: 'showcase.testimonial1Quote',
        nameKey: 'showcase.testimonial1Name',
        designationKey: 'showcase.testimonial1Designation',
        src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop',
    },
    /* already translated */
    {
        quote:
            'Implementation was seamless and the results exceeded our expectations. The platform’s flexibility is remarkable.',
        name: 'Michael Rodriguez',
        designation: 'CTO at InnovateSphere',
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop',
    },
    {
        quote:
            'This solution has significantly improved our team’s productivity. The intuitive interface makes complex tasks simple.',
        name: 'Emily Watson',
        designation: 'Operations Director at CloudScale',
        src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop',
    },
    {
        quote:
            'Outstanding support and robust features. It’s rare to find a product that delivers on all its promises.',
        name: 'James Kim',
        designation: 'Engineering Lead at DataPro',
        src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop',
    },
    {
        quote:
            'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
        name: 'Lisa Thompson',
        designation: 'VP of Technology at FutureNet',
        src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop',
    },
];

/* ────────────────────────────
   Showcase component
   ──────────────────────────── */

export default function Showcase() {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    /** Translate the first testimonial; leave others unchanged */
    const processedTestimonials: Testimonial[] = testimonials.map<Testimonial>((item) =>
        isRaw(item)
            ? {
                quote: t(item.quoteKey),
                name: t(item.nameKey),
                designation: t(item.designationKey),
                src: item.src,
            }
            : item
    );

    return (
        <section
            id="showcase"
            className="bg-second dark:bg-black sm:py-16 px-4 text-prime dark:text-second"
        >
            <div className="max-w-6xl mx-auto">
                {/* ── Main title ── */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    {t('showcase.mainTitle')}
                </h2>

                {/* ── Project grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <ShowcaseCard key={p.id} title={t(p.titleKey)} index={i} />
                    ))}
                </div>

                {/* ── Testimonials ── */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mt-20">
                        {t('showcase.testimonialsTitle')}
                    </h2>
                    <AnimatedTestimonials testimonials={processedTestimonials} autoplay />
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────
   Individual project tile
   ──────────────────────────── */

function ShowcaseCard({ title, index }: { title: string; index: number }) {
    const vid = useRef<HTMLVideoElement>(null);
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    /* hover helpers */
    const play = () => vid.current?.play();
    const reset = () => {
        if (!vid.current) return;
        vid.current.pause();
        vid.current.currentTime = 0;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            animate="rest"
            whileHover="hover"
            className="flex flex-col items-start group cursor-pointer"
            onHoverStart={play}
            onHoverEnd={reset}
        >
            {/* Poster + title stack */}
            <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
                {/* ── Title ── */}
                <motion.span
                    variants={{
                        rest: { y: 0, textShadow: '0px 0px 0px rgba(0,0,0,0)' },
                        hover: { y: -8, textShadow: '0px 4px 12px rgba(0,0,0,0.35)' },
                    }}
                    transition={{ type: 'tween', duration: 0.25 }}
                    className="mb-3 text-lg font-semibold text-prime dark:text-second select-none"
                >
                    {title}
                </motion.span>

                {/* ── Poster image ── */}
                <div className="relative w-[80%] overflow-hidden rounded-lg shadow-lg group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
                    <img
                        src="/hero.png"
                        alt={t('showcase.projectPosterAlt').replace('{title}', title)}
                        className="w-full h-56 md:h-64 object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}
