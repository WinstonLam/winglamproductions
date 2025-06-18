'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';


// type ShowcaseItem = { title: string }; // Will be { titleKey: string, id: string }

const projects = [ // No specific type, will be inferred
    { titleKey: 'landingPage.showcase.projectJohnsBurgers', id: 'johns-burgers' },
    { titleKey: 'landingPage.showcase.projectLotusYoga', id: 'lotus-yoga' },
    { titleKey: 'landingPage.showcase.projectAuroraTech', id: 'aurora-tech' },
    { titleKey: 'landingPage.showcase.projectVintageWheels', id: 'vintage-wheels' },
];

const testimonials = [
    {
        quoteKey: 'landingPage.showcase.testimonial1Quote',
        nameKey: 'landingPage.showcase.testimonial1Name',
        designationKey: 'landingPage.showcase.testimonial1Designation',
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        // This testimonial remains untranslated as per instructions for this step
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Showcase() {
    const { currentLanguage } = useLanguage();
    const { t, loading } = useTranslations(currentLanguage, ['landingPage']); // Updated useTranslations

    // Map translated testimonials for AnimatedTestimonials
    // For this step, only the first testimonial is being fully translated in the data structure.
    // The AnimatedTestimonials component would ideally consume these keys directly or be adapted.
    // Here, we prepare the data as if it would.
    const processedTestimonials = testimonials.map((testimonial, index) => {
        if (index === 0 && testimonial.quoteKey && testimonial.nameKey && testimonial.designationKey) {
            return {
                quote: t(testimonial.quoteKey),
                name: t(testimonial.nameKey),
                designation: t(testimonial.designationKey),
                src: testimonial.src,
            };
        }
        // For other testimonials, pass them as they are (untranslated for this step)
        return testimonial; // This will include objects with quote, name, designation directly
    });


    return (
        <section id="showcase" className="bg-second dark:bg-black sm:py-16 px-4 text-prime dark:text-second">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
                    {t('landingPage.showcase.mainTitle')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <ShowcaseCard key={p.id} title={t(p.titleKey)} index={i} t={t} /> // Pass t to ShowcaseCard
                    ))}
                </div>
                <div className='max-w-6xl mx-auto'>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mt-20">
                        {t('landingPage.showcase.testimonialsTitle')}
                    </h2>
                    <AnimatedTestimonials testimonials={processedTestimonials} autoplay={true} />
                </div>
            </div>
        </section>
    );
}

/* ─── individual tile ───────────────────────────────────────── */
function ShowcaseCard({
    title,
    index,
    t, // Receive t function
}: {
    title: string;
    index: number;
    t: (key: string) => string; // Define prop type for t
}) {
    const vid = useRef<HTMLVideoElement>(null);

    /* helper callbacks */
    const play = () => vid.current?.play();
    const reset = () => {
        if (!vid.current) return;
        vid.current.pause();
        vid.current.currentTime = 0;
    };

    return (
        <motion.div
            /* stagger‑in */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            /* hover variant controller */
            animate="rest"          // <- declare starting variant

            whileHover="hover"

            className="flex flex-col items-start group cursor-pointer"
            onHoverStart={play}
            onHoverEnd={reset}
        >


            {/* ── POSTER + VIDEO STACK ── */}
            <div className="relative w-full overflow-hidden 
            flex flex-col items-center justify-center ">
                {/* ── TITLE ── */}
                <motion.span
                    variants={{
                        rest: { y: 0, textShadow: '0px 0px 0px rgba(0,0,0,0)' },
                        hover: {
                            y: -8,
                            textShadow: '0px 4px 12px rgba(0,0,0,0.35)',
                        },
                    }}
                    transition={{ type: 'tween', duration: 0.25 }}
                    className="mb-3 text-lg font-semibold text-prime dark:text-second select-none"
                >
                    {title}
                </motion.span>
                {/* poster sits behind */}
                <div className='relative w-[80%] overflow-hidden rounded-lg shadow-lg group-hover:-translate-y-2 transition-all duration-300
            flex items-center justify-center'>

                    <img
                        src={`/hero.png`}
                        alt={t('landingPage.showcase.projectPosterAlt').replace('{title}', title)}
                        className="w-full h-56 md:h-64 object-cover"
                    />
                </div>


            </div>
        </motion.div>
    );
}
