// src/lib/useTranslations.ts
import { useState, useEffect } from 'react';
import enTranslations from '@/locales/en.json';
import nlTranslations from '@/locales/nl.json';


// node may be anything JSON allows
export type TranslationEntry =
    | string | number | boolean | null
    | { [key: string]: TranslationEntry }
    | TranslationEntry[];

// tree has the same top-level keys as the JSON file
type TranslationTree = {
    [K in keyof typeof enTranslations]: TranslationEntry;
};

// available locales
const translations: Record<'en' | 'nl', TranslationTree> = {
    en: enTranslations as TranslationTree,
    nl: nlTranslations as TranslationTree,
};
export type Locale = keyof typeof translations;


export function useTranslations(locale: Locale) {
    const [currentTranslations, setCurrentTranslations] =
        useState<TranslationTree>(translations[locale]);

    useEffect(() => {
        setCurrentTranslations(translations[locale]);
    }, [locale]);

    function resolve(path: string): TranslationEntry | undefined {
        return path
            .split('.')
            .reduce<TranslationEntry | undefined>((node, seg) => {
                if (
                    node === undefined ||
                    node === null ||
                    typeof node !== 'object'
                )
                    return undefined;

                if (Array.isArray(node)) {
                    const idx = Number(seg);
                    return Number.isInteger(idx) ? node[idx] : undefined;
                }

                return (node as Record<string, TranslationEntry>)[seg];
            }, currentTranslations);
    }

    function t(path: string): string;

    function t<T = TranslationEntry>(
        path: string,
        opts: { returnObjects: true }
    ): T;

    function t<T = TranslationEntry>(
        path: string,
        opts?: { returnObjects?: boolean }
    ): unknown {
        const value = resolve(path);

        if (opts?.returnObjects) {
            return value as T;
        }

        return typeof value === 'string' ? value : path;
    }

    function getNestedValue<T = TranslationEntry>(
        path: string
    ): T | undefined {
        return resolve(path) as T | undefined;
    }

    return { t, getNestedValue, currentLocale: locale };
}
