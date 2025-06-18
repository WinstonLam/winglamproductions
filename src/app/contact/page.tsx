'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/lib/useTranslations';
import { cn } from '@/lib/utils';

export default function ContactPage() {
    /* ─── translations ─────────────────────────────────────────────── */
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    /* ─── form error state ─────────────────────────────────────────── */
    const [error, setError] = useState<string | null>(null);

    /* ─── constant option lists (value stays English; label is i18n) ─ */
    const serviceOptions = [
        { value: 'videography', labelKey: 'contactPage.services.videography' },
        { value: 'photography', labelKey: 'contactPage.services.photography' },
        { value: 'both', labelKey: 'contactPage.services.both' },
    ];

    const reasonOptions = [
        { value: 'engagement', labelKey: 'contactPage.reasons.engagement' },
        { value: 'credibility', labelKey: 'contactPage.reasons.credibility' },
        { value: 'qualify', labelKey: 'contactPage.reasons.qualify' },
        { value: 'awareness', labelKey: 'contactPage.reasons.awareness' },
    ];

    const budgetOptions = [
        { value: 'lt500', labelKey: 'contactPage.budget.lt500' },
        { value: '500-1000', labelKey: 'contactPage.budget.500to1000' },
        { value: 'gt1000', labelKey: 'contactPage.budget.gt1000' },
    ];

    const timelineOptions = [
        { value: 'asap', labelKey: 'contactPage.timeline.asap' },
        { value: '1-2m', labelKey: 'contactPage.timeline.1to2' },
        { value: '3-6m', labelKey: 'contactPage.timeline.3to6' },
        { value: 'research', labelKey: 'contactPage.timeline.research' },
    ];

    const referralOptions = [
        { value: 'instagram', labelKey: 'contactPage.referral.instagram' },
        { value: 'youtube', labelKey: 'contactPage.referral.youtube' },
        { value: 'google', labelKey: 'contactPage.referral.google' },
        { value: 'friend', labelKey: 'contactPage.referral.friend' },
        { value: 'other', labelKey: 'contactPage.referral.other' },
    ];

    /* ─── submit handler ───────────────────────────────────────────── */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const data = new FormData(e.currentTarget);

        const firstName = (data.get('firstName') || '').toString().trim();
        const lastName = (data.get('lastName') || '').toString().trim();
        const email = (data.get('email') || '').toString().trim();
        const phone = (data.get('phone') || '').toString().trim();

        if (!firstName || !lastName || !email || !phone) {
            setError(t('contactPage.errorRequired'));
            return;
        }

        /* ─ build Calendly params (unchanged) ─ */
        const website = (data.get('website') || '').toString().trim();
        const services = (data.get('services') || '').toString();
        const reasonsArr = data.getAll('reasons') as string[];
        const budget = (data.get('budget') || '').toString();
        const startTimeline = (data.get('startTimeline') || '').toString();
        const references = (data.get('references') || '').toString().trim().slice(0, 1000);
        const vision = (data.get('vision') || '').toString().trim().slice(0, 1000);
        const referral = (data.get('referral') || '').toString();

        const fullName = `${firstName} ${lastName}`;
        const reasons = reasonsArr.join(', ');
        const params = new URLSearchParams({
            name: fullName,
            email,
            a1: `website: ${website}\nservices: ${services}\ngoal: ${reasons}\nbudget: ${budget}\ntimeline: ${startTimeline}\nreferences: ${references}\nvision: ${vision}\nreferral: ${referral}`,
        }).toString();

        window.open(
            `https://calendly.com/winglamproductions/30min?${params}`,
            '_blank',
        );
    };

    /* ─── flip-words array comes from JSON ─────────────────────────── */
    const flipWords = t('contactPage.flipWords', { returnObjects: true }) as string[];

    /* ─── render ───────────────────────────────────────────────────── */
    return (
        <main className="bg-second dark:bg-black pt-20 sm:pt-28 pb-20 px-6 text-black dark:text-second flex items-center">
            <section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                {/* ───── intro copy ───── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="md:mt-15 w-[80%]"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        {t('contactPage.title')}
                    </h1>

                    <ContainerTextFlip
                        className="-mt-5 text-3xl md:text-4xl"
                        words={flipWords}
                    />

                    <p className="text-lg leading-relaxed mb-8">
                        {t('contactPage.description')}
                    </p>

                    <div className="space-y-4 text-base">
                        <p>
                            <span className="font-semibold">{t('contactPage.emailLabel')}</span>{' '}
                            <a
                                href="mailto:winglamproductions@outlook.com"
                                className="underline underline-offset-2 decoration-primary hover:text-primary"
                            >
                                winglamproductions@outlook.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">{t('contactPage.phoneLabel')}</span>{' '}
                            <a
                                href="tel:+31637349782"
                                className="underline underline-offset-2 decoration-primary hover:text-primary"
                            >
                                +31 6 37349782
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">{t('contactPage.studioLabel')}</span>{' '}
                            {t('contactPage.studioValue')}
                        </p>
                    </div>
                </motion.div>

                {/* ───── form card ───── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full"
                >
                    <div
                        className="bg-second dark:bg-black rounded-xl p-8 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.30)]
              dark:shadow-[0_0_20px_rgba(var(--color-second-rgb,255,255,255),0.20)] h-full"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-prime dark:text-second">
                            {t('contactPage.formTitle')}
                        </h2>

                        {error && (
                            <p className="mb-4 text-red-600 dark:text-red-400">{error}</p>
                        )}

                        <form
                            className="space-y-6 text-prime dark:text-second"
                            onSubmit={handleSubmit}
                        >
                            {/* First + Last */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder={t('contactPage.firstNamePlaceholder')}
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={t('contactPage.lastNamePlaceholder')}
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                            </div>

                            {/* Website */}
                            <input
                                type="url"
                                name="website"
                                placeholder={t('contactPage.websitePlaceholder')}
                                className="w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                            />

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('contactPage.emailPlaceholder')}
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t('contactPage.phonePlaceholder')}
                                    className="border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary"
                                    required
                                />
                            </div>

                            {/* Services */}
                            <fieldset>
                                <legend className="font-semibold mb-2">
                                    {t('contactPage.legendServices')}
                                </legend>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {serviceOptions.map(opt => (
                                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="services"
                                                value={opt.value}
                                                className="accent-primary"
                                                required
                                            />
                                            {t(opt.labelKey)}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* Reasons */}
                            <fieldset>
                                <legend className="font-semibold mb-2">
                                    {t('contactPage.legendReasons')}
                                </legend>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {reasonOptions.map(opt => (
                                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="reasons"
                                                value={opt.value}
                                                className="accent-primary"
                                            />
                                            {t(opt.labelKey)}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* Budget */}
                            <label className="block font-semibold">
                                {t('contactPage.labelBudget')}
                                <select
                                    name="budget"
                                    required
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled>
                                        {t('contactPage.selectOption')}
                                    </option>
                                    {budgetOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {t(opt.labelKey)}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-sm mt-1 font-light">
                                    {t('contactPage.budgetNote')}
                                </p>
                            </label>

                            {/* Timeline */}
                            <label className="block font-semibold">
                                {t('contactPage.labelTimeline')}
                                <select
                                    name="startTimeline"
                                    required
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled>
                                        {t('contactPage.selectOption')}
                                    </option>
                                    {timelineOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {t(opt.labelKey)}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            {/* References */}
                            <textarea
                                name="references"
                                placeholder={t('contactPage.referencesPlaceholder')}
                                rows={3}
                                className="border border-prime dark:border-second rounded p-2 w-full bg-transparent focus:outline-primary"
                            />

                            {/* Vision */}
                            <textarea
                                name="vision"
                                placeholder={t('contactPage.visionPlaceholder')}
                                rows={5}
                                className="border border-prime dark:border-second rounded p-2 w-full bg-transparent focus:outline-primary"
                            />

                            {/* Referral */}
                            <label className="block font-semibold">
                                {t('contactPage.labelReferral')}
                                <select
                                    name="referral"
                                    className="mt-2 w-full border border-prime dark:border-second rounded p-2 bg-transparent focus:outline-primary font-light"
                                >
                                    <option value="" disabled>
                                        {t('contactPage.selectOption')}
                                    </option>
                                    {referralOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {t(opt.labelKey)}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className={cn(
                                    'w-full bg-second dark:bg-black border border-prime dark:border-second',
                                    'dark:text-second text-prime py-3 rounded-full font-bold',
                                    'hover:bg-prime hover:text-second dark:hover:bg-second dark:hover:text-prime',
                                    'transition-all duration-300 cursor-pointer',
                                )}
                            >
                                {t('contactPage.submit')}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
