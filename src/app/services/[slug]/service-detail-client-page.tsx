// src/app/services/[slug]/service-detail-client-page.tsx
"use client"; // This component will be a Client Component

import { Service as ServiceType, Tier as TierType, DeliverableChoice } from "@/lib/servicesData"; // Use descriptive names
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import { AnimatedUnderlineLink } from "@/components/ui/animate-underline";
import { cn } from "@/lib/utils";

// Helper function to check if an item is a DeliverableChoice
function isDeliverableChoice(item: string | DeliverableChoice): item is DeliverableChoice {
    return (item as DeliverableChoice).type === 'choice';
}



const TierCard = ({
    tier,
    themeColor = "black",
    isPopular = false // New prop
}: {
    tier: TierType,
    themeColor?: string,
    isPopular?: boolean // New prop
}) => {
    const renderList = (items?: (string | DeliverableChoice)[]) => {
        if (!items || items.length === 0) return null;
        return (
            <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                {items.map((item, index) => {
                    if (isDeliverableChoice(item)) {
                        // Render choice structure
                        return (
                            <li key={index} className="!mt-3 list-none"> {/* Remove default li styling, add margin top */}
                                <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">{item.label}</p>
                                {item.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="mb-1">
                                        <p className="ml-0 text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-0.5">
                                            Option {String.fromCharCode(65 + optionIndex)}:
                                        </p>
                                        <ul className="list-none pl-0"> {/* To contain the single "option itself" as a list item */}
                                            <li className="flex items-start ml-4"> {/* Indented item */}
                                                <CheckCircleIcon className={`h-5 w-5 dark:text-second mr-2 mt-0.5 flex-shrink-0`} />
                                                <span>{option}</span> {/* This is the "option itself" */}
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </li>
                        );
                    } else {
                        // Render simple string item
                        return (
                            <li key={index} className="flex items-start">
                                <CheckCircleIcon className={`h-5 w-5 dark:text-second mr-2 mt-0.5 flex-shrink-0`} />
                                <span>{item}</span>
                            </li>
                        );
                    }
                })}
            </ul>
        );
    };
    const popularBorderColorClass = isPopular ? `border-${themeColor}` : "border-zinc-200 dark:border-zinc-700";
    const popularShadowClass = isPopular ? "shadow-2xl scale-[1.03]" : "shadow-lg"; // Enhanced shadow and slight scale for popular
    const popularRingClass = isPopular ? `ring-2 ring-offset-2 ring-offset-second dark:ring-offset-black ring-${themeColor}` : "";



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isPopular ? 0.1 : 0 }} // Slight delay for popular to draw attention
            className={cn(
                "bg-white dark:bg-zinc-900 p-6 rounded-xl border flex flex-col h-full relative overflow-hidden", // Added relative and overflow-hidden for ribbon
                popularBorderColorClass,
                popularShadowClass,
                popularRingClass, // Added ring for popular
                "transform transition-all duration-300 ease-in-out" // Added for scale transition
            )}
        >
            {isPopular && (
                <div className={cn(
                    "absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white tracking-wider uppercase rounded-bl-lg",
                    `bg-${themeColor}`
                )}>
                    <StarIcon className="h-3 w-3 inline-block mr-1 mb-0.5" />
                    Most Popular
                </div>
            )}

            <h3 className={"text-2xl font-semibold mb-3"}>{tier.name}</h3>
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

            <div className="mt-auto pt-4  ">
                <p className={"text-3xl font-bold mb-4"}>
                    {tier.price},-
                    <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400"> excl. VAT</span>
                </p>
                <Link
                    href="/contact" // Ensure this links to your contact page
                    className={` inline-block text-second font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer text-center w-full sm:w-auto 
                         bg-${themeColor} hover:bg-transparent border-4 border-${themeColor} hover:text-black dark:hover:text-second `}
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
    const tierThemeColors = ["black", "prime", "black"]; // Example theme colors

    return (
        <section className="bg-second dark:bg-black text-black dark:text-second py-16 sm:py-24 px-4 sm:px-6 md:px-8"> {/* Adjusted padding */}
            <div className="max-w-7xl mx-auto"> {/* Increased max-width for potentially wider tier display */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center md:text-left" // Center on mobile, left on desktop
                >
                    <AnimatedUnderlineLink href="/services" >
                        <div className="inline-block text-base text-primary dark:text-second hover:text-primary-dark dark:hover:text-primary-light transition-colors" > {/* Adjusted size and hover */}
                            ← Back to All Services
                        </div>
                    </AnimatedUnderlineLink>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-3 mt-6 text-zinc-900 dark:text-white"> {/* Adjusted margin */}
                        {service.pageTitle || service.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto md:mx-0"> {/* Max-width for readability */}
                        {service.pageDescription}
                    </p>
                </motion.div>

                {service.tiers && service.tiers.length > 0 ? (
                    <>
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-12 text-center text-zinc-900 dark:text-white">
                            Our Packages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                            {service.tiers.map((tier, index) => {
                                const isMiddleTier = service.tiers && service.tiers.length === 3 && index === 1;
                                // Or, if you have a specific flag in your data: const isPopularTier = tier.isPopular;
                                return (
                                    <TierCard
                                        key={tier.name}
                                        tier={tier}
                                        themeColor={tierThemeColors[index % tierThemeColors.length]}
                                        isPopular={isMiddleTier} // Pass the isPopular prop
                                    />
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8" // Added some container styling
                    >
                        <svg className="mx-auto h-12 w-12 text-zinc-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                            Detailed packages are on their way!
                        </p>
                        <p className="text-base text-zinc-500 dark:text-zinc-400 mb-6">
                            We&apos;re crafting the perfect options for this service. In the meantime, please reach out for a custom consultation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-medium px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}