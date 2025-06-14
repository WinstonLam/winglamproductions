import { useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import nlTranslations from '@/locales/nl.json';


type TranslationEntry = string | { [key: string]: TranslationEntry };


type TranslationTree = {
    [K in keyof typeof enTranslations]: TranslationEntry;
};

const translations: Record<'en' | 'nl', TranslationTree> = {
    en: enTranslations as TranslationTree,
    nl: nlTranslations as TranslationTree,
};

export type Locale = keyof typeof translations;

/** -------------------------------------------------
 *  2.  Hook
 * -------------------------------------------------*/
export function useTranslations(locale: Locale) {
    const [currentTranslations, setCurrentTranslations] =
        useState<TranslationTree>(translations[locale]);

    useEffect(() => {
        setCurrentTranslations(translations[locale]);
    }, [locale]);

    function t(path: string): string {
        const segments = path.split('.');
        let node: TranslationEntry = currentTranslations;

        for (const seg of segments) {
            if (typeof node === 'string') break;      // hit a leaf early
            node = node[seg];
            if (node === undefined) return path;      // missing key
        }

        return typeof node === 'string' ? node : path;
    }

    return { t, currentLocale: locale };
}
