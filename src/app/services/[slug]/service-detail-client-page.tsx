'use client';

import { Service as ServiceType, Tier as TierType, DeliverableChoice } from '@/app/types/service';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import { AnimatedUnderlineLink } from '@/components/ui/animate-underline';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';

function isDeliverableChoice(
    item: string | DeliverableChoice,
): item is DeliverableChoice {
    return typeof item !== 'string' && item.type === 'choice';
}

const TierCard = ({
    tier,
    themeColor = 'black',
    isPopular = false,
    t,
}: {
    tier: TierType;
    themeColor?: string;
    isPopular?: boolean;
    t: (key: string) => string;
}) => {
    const renderList = (items?: (string | DeliverableChoice)[]) => {
        if (!items?.length) return null;

        return (
            <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                {items.map((item, index) => {
                    if (isDeliverableChoice(item)) {
                        return (
                            <li key={index} className="!mt-3 list-none">
                                <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                                    {t(item.labelKey)}
                                </p>
                                {item.options.map((opt, optIdx) => (
                                    <div key={optIdx} className="mb-1">
                                        <p className="ml-0 text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-0.5">
                                            {t('serviceDetailPage.deliverableOptionLabel').replace(
                                                '{optionLetter}',
                                                String.fromCharCode(65 + optIdx),
                                            )}
                                        </p>
                                        <ul className="list-none pl-0">
                                            <li className="flex items-start ml-4">
                                                <CheckCircleIcon className="h-5 w-5 dark:text-second mr-2 mt-0.5 flex-shrink-0" />
                                                <span>{t(opt)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </li>
                        );
                    }

                    return (
                        <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 dark:text-second mr-2 mt-0.5 flex-shrink-0" />
                            <span>{t(item)}</span>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const border = isPopular ? `border-${themeColor}` : 'border-zinc-200 dark:border-zinc-700';
    const shadow = isPopular ? 'shadow-2xl scale-[1.03]' : 'shadow-lg';
    const ring = isPopular
        ? `ring-2 ring-offset-2 ring-offset-second dark:ring-offset-black ring-${themeColor}`
        : '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isPopular ? 0.1 : 0 }}
            className={cn(
                'bg-white dark:bg-zinc-900 p-6 rounded-xl border flex flex-col h-full relative overflow-hidden',
                border,
                shadow,
                ring,
                'transform transition-all duration-300 ease-in-out',
            )}
        >
            {isPopular && (
                <div
                    className={cn(
                        'absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white tracking-wider uppercase rounded-bl-lg',
                        `bg-${themeColor}`,
                    )}
                >
                    <StarIcon className="h-3 w-3 inline-block mr-1 mb-0.5" />
                    {t('serviceDetailPage.mostPopular')}
                </div>
            )}

            <h3 className="text-2xl font-semibold mb-3">{t(tier.nameKey)}</h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 italic">
                <strong>{t('serviceDetailPage.perfectForPrefix')}</strong>{' '}
                {t(tier.perfectForKey)}
            </p>

            <div className="space-y-4 mb-6 flex-grow">
                {tier.strategy?.length && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                            {t('serviceDetailPage.strategyTitle')}
                        </h4>
                        {renderList(tier.strategy)}
                    </div>
                )}

                {tier.production?.length && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                            {t('serviceDetailPage.productionTitle')}
                        </h4>
                        {renderList(tier.production)}
                    </div>
                )}

                <div>
                    <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                        {t('serviceDetailPage.deliverablesTitle')}
                    </h4>
                    {renderList(tier.deliverables)}
                </div>

                {tier.serviceFeatures?.length && (
                    <div>
                        <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                            {t('serviceDetailPage.serviceFeaturesTitle')}
                        </h4>
                        {renderList(tier.serviceFeatures)}
                    </div>
                )}
            </div>

            <div className="mt-auto pt-4">
                <p className="text-3xl font-bold mb-4">
                    {t(tier.priceKey)}
                    {t('serviceDetailPage.priceSuffix')}
                </p>

                <Link
                    href="/contact"
                    className={`inline-block text-second font-medium px-6 py-3 rounded-full transition-all duration-300 cursor-pointer text-center w-full sm:w-auto 
            bg-${themeColor} hover:bg-transparent border-4 border-${themeColor} hover:text-black dark:hover:text-second`}
                >
                    {t('serviceDetailPage.bookServiceButton')}
                </Link>
            </div>
        </motion.div>
    );
};

interface Props {
    service: ServiceType;
}

export default function ServiceDetailClientPage({ service }: Props) {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    const tierColors = ['black', 'prime', 'black'];

    return (
        <section className="bg-second dark:bg-black text-black dark:text-second py-16 sm:py-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center md:text-left"
                >
                    <AnimatedUnderlineLink href="/services">
                        <span className="inline-block text-base text-primary dark:text-second hover:text-primary-dark dark:hover:text-primary-light transition-colors">
                            {t('serviceDetailPage.backToServices')}
                        </span>
                    </AnimatedUnderlineLink>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-3 mt-6 text-zinc-900 dark:text-white">
                        {t(service.pageTitleKey ?? service.titleKey)}
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
                        {t(service.pageDescriptionKey)}
                    </p>
                </motion.div>

                {service.tiers?.length ? (
                    <>
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-12 text-center text-zinc-900 dark:text-white">
                            {t('serviceDetailPage.ourPackages')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                            {service.tiers.map((tier, i) => (
                                <TierCard
                                    key={tier.nameKey}
                                    tier={tier}
                                    themeColor={tierColors[i % tierColors.length]}
                                    isPopular={service.tiers?.length === 3 && i === 1}
                                    t={t}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8"
                    >
                        <svg
                            className="mx-auto h-12 w-12 text-zinc-400 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                vectorEffect="non-scaling-stroke"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                            {t('serviceDetailPage.noPackages.title')}
                        </p>
                        <p className="text-base text-zinc-500 dark:text-zinc-400 mb-6">
                            {t('serviceDetailPage.noPackages.description')}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white font-medium px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-300"
                        >
                            {t('serviceDetailPage.noPackages.contactButton')}
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
