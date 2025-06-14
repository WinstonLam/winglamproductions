import { useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import nlTranslations from '@/locales/nl.json';

const translations = {
    en: enTranslations,
    nl: nlTranslations,
};

export type Locale = keyof typeof translations;

export function useTranslations(locale: Locale) {
    const [currentTranslations, setCurrentTranslations] = useState(translations[locale]);

    useEffect(() => {
        setCurrentTranslations(translations[locale]);
    }, [locale]);

    function t(key: string): string {
        const keys = key.split('.');
        let result: any = currentTranslations;
        for (const k of keys) {
            result = result?.[k];
            if (result === undefined) {
                // Return the key itself if translation is not found
                return key;
            }
        }
        return result as string;
    }

    return { t, currentLocale: locale };
}
