// src/sections/landing-page/3-Showcase.tsx

'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations, type Locale } from '@/lib/useTranslations'; // Import Locale if needed elsewhere

interface Project {
    titleKey: string;
    id: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
}

const projects: Project[] = [
    { titleKey: 'landing.showcase.projectJohnsBurgers', id: 'johns-burgers' },
    { titleKey: 'landing.showcase.projectLotusYoga', id: 'lotus-yoga' },
    { titleKey: 'landing.showcase.projectAuroraTech', id: 'aurora-tech' },
    { titleKey: 'landing.showcase.projectVintageWheels', id: 'vintage-wheels' },
];

export default function Showcase() {
    const { currentLanguage } = useLanguage();
    const { t, getNestedValue } = useTranslations(currentLanguage as Locale); // Cast currentLanguage if its type is broader

    console.log("[Showcase.tsx] Current Language:", currentLanguage);

    const rawTestimonialsData = getNestedValue<Testimonial[]>('landing.showcase.testimonials');

    console.log("[Showcase.tsx] rawTestimonialsData from getNestedValue():", rawTestimonialsData);
    console.log("[Showcase.tsx] typeof rawTestimonialsData:", typeof rawTestimonialsData);
    console.log("[Showcase.tsx] Array.isArray(rawTestimonialsData):", Array.isArray(rawTestimonialsData));

    let testimonialsToDisplay: Testimonial[] = [];

    if (Array.isArray(rawTestimonialsData)) {
        // We can be more confident here, but the filter is still good for runtime safety
        testimonialsToDisplay = rawTestimonialsData.filter(
            (item: unknown): item is Testimonial => {
                if (typeof item !== 'object' || item === null) return false;
                const itemAsTestimonial = item as Testimonial;
                return (
                    'quote' in itemAsTestimonial && typeof itemAsTestimonial.quote === 'string' &&
                    'name' in itemAsTestimonial && typeof itemAsTestimonial.name === 'string' &&
                    'designation' in itemAsTestimonial && typeof itemAsTestimonial.designation === 'string' &&
                    'src' in itemAsTestimonial && typeof itemAsTestimonial.src === 'string'
                );
            }
        );

        if (testimonialsToDisplay.length !== rawTestimonialsData.length) {
            console.warn("[Showcase.tsx] Some items fetched for 'landing.showcase.testimonials' via getNestedValue did not match the expected Testimonial structure and were filtered out.");
        }
        console.log("[Showcase.tsx] Filtered testimonialsToDisplay:", testimonialsToDisplay);

    } else if (rawTestimonialsData !== undefined) { // Check if it's defined but not an array
        console.warn("[Showcase.tsx] 'landing.showcase.testimonials' retrieved via getNestedValue was not an array. Value received:", rawTestimonialsData);
    } else { // rawTestimonialsData is undefined
        console.warn("[Showcase.tsx] 'landing.showcase.testimonials' key not found or path invalid using getNestedValue.");
    }


    return (
        <section
            id="showcase"
            className="bg-second dark:bg-black sm:py-16 px-4 text-prime dark:text-second"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    {t('landing.showcase.mainTitle')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <ShowcaseCard key={p.id} title={t(p.titleKey)} index={i} />
                    ))}
                </div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mt-20">
                        {t('landing.showcase.testimonialsTitle')}
                    </h2>
                    <AnimatedTestimonials testimonials={testimonialsToDisplay} autoplay />
                </div>
            </div>
        </section>
    );
}

// ShowcaseCard component (no changes needed here)
function ShowcaseCard({ title, index }: { title: string; index: number }) {
    const vid = useRef<HTMLVideoElement>(null);
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage as Locale); // Cast currentLanguage if its type is broader


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
            <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
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
                <div className="relative w-[80%] overflow-hidden rounded-lg shadow-lg group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
                    <img
                        src="/hero.png"
                        alt={t('landing.showcase.projectPosterAlt').replace('{title}', title)}
                        className="w-full h-56 md:h-64 object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}