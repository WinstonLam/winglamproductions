// src/app/services/[slug]/service-detail-client-page.tsx
"use client"; // This component will be a Client Component

import { Service as ServiceType, Tier as TierType } from "@/lib/servicesData"; // Use descriptive names
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { AnimatedUnderlineLink } from "@/components/ui/animate-underline";

// Helper component for tier cards (remains part of this client component)
const TierCard = ({ tier, themeColor = "primary" }: { tier: TierType, themeColor?: string }) => {
    const renderList = (items?: string[]) => {
        if (!items || items.length === 0) return null;
        return (
            <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon className={`h-5 w-5 text-${themeColor} mr-2 mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    };

    const themeTextColor = `text-${themeColor}`;


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 flex flex-col h-full"
        >
            <h3 className={`text-2xl font-semibold ${themeTextColor} mb-3`}>{tier.name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 italic">
                <strong>Perfect for:</strong> {tier.perfectFor}
            </p>

            <div className="space-y-4 mb-6 flex-grow">
                {tier.strategy && tier.strategy.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Strategy</h4>
                        {renderList(tier.strategy)}
                    </div>
                )}
                {tier.production && tier.production.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Production</h4>
                        {renderList(tier.production)}
                    </div>
                )}
                <div>
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Deliverables</h4>
                    {renderList(tier.deliverables)}
                </div>
                {tier.serviceFeatures && tier.serviceFeatures.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Service</h4>
                        {renderList(tier.serviceFeatures)}
                    </div>
                )}
            </div>

            <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <p className={`text-3xl font-bold ${themeTextColor} mb-4`}>
                    €{tier.price},-
                    <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400"> excl. VAT</span>
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-primary text-white bg-black dark:bg-second dark:text-black font-medium px-6 py-3 rounded-full border border-black dark:border-second
                                     hover:bg-transparent  hover:text-black dark:hover:text-second transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
                >
                    Book this service
                </Link>
            </div>
        </motion.div>
    );
};

// This is the main client component for the page's content
interface ServiceDetailClientPageProps {
    service: ServiceType;
}

export default function ServiceDetailClientPage({ service }: ServiceDetailClientPageProps) {
    const tierThemeColors = ["primary", "purple-600", "teal-500"];

    return (
        <section className="bg-second dark:bg-black text-black dark:text-second py-16 sm:py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <AnimatedUnderlineLink href="/services" >
                        <div className="text-lg text-primary dark:text-second  " >
                            ← Back to All Services
                        </div>
                    </AnimatedUnderlineLink>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10 text-zinc-900 dark:text-white">
                        {service.pageTitle || service.title}
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {service.pageDescription}
                    </p>
                </motion.div>

                {service.tiers && service.tiers.length > 0 ? (
                    <>
                        <h2 className="text-3xl font-semibold mb-10 text-center text-zinc-900 dark:text-white">
                            Our Packages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {service.tiers.map((tier, index) => (
                                <TierCard key={tier.name} tier={tier} themeColor={tierThemeColors[index % tierThemeColors.length]} />
                            ))}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">
                            Detailed packages for this service are coming soon!
                        </p>
                        <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-6">
                            In the meantime, please reach out for a custom consultation.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                        Have a more elaborate project or unique requirements? We are happy to discuss a custom quote tailored to your specific needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary text-white bg-black dark:bg-second dark:text-black font-medium px-6 py-3 rounded-full border border-black dark:border-second
                                     hover:bg-transparent  hover:text-black dark:hover:text-second transition-all duration-300 cursor-pointer text-center w-full sm:w-auto"
                    >
                        Request Custom Quote
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}