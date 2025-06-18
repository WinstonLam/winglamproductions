import { useState, useEffect, useCallback } from 'react';

// Define Locale type based on supported languages
export type Locale = 'en' | 'nl';

// General type for a tree-like structure of translations
type TranslationEntry = string | { [key: string]: TranslationEntry };
type TranslationNamespace = { [key: string]: TranslationEntry };
type AllTranslations = { [namespace: string]: TranslationNamespace };

// Function to dynamically import a single JSON translation file for a given locale and namespace
const loadTranslationsForNamespace = async (locale: Locale, namespace: string): Promise<TranslationNamespace> => {
    try {
        const mod = await import(`@/locales/${locale}/${namespace}.json`);
        return mod.default || mod;
    } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}, namespace: ${namespace}`, error);
        return {}; // Return empty object on error to prevent breaking the app
    }
};

// useTranslations Hook
export function useTranslations(locale: Locale, namespaces: string | string[] = 'common') {
    const [translations, setTranslations] = useState<AllTranslations>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

    const loadAllSpecifiedTranslations = useCallback(async (currentLocaleToLoad: Locale) => {
        setIsLoading(true);
        const nsArray = Array.isArray(namespaces) ? namespaces : [namespaces];
        const loadedTranslations: AllTranslations = {};

        for (const ns of nsArray) {
            loadedTranslations[ns] = await loadTranslationsForNamespace(currentLocaleToLoad, ns);
        }

        setTranslations(loadedTranslations);
        setIsLoading(false);
    }, [namespaces]); // namespaces is a dependency

    useEffect(() => {
        setCurrentLocale(locale);
        loadAllSpecifiedTranslations(locale);
    }, [locale, loadAllSpecifiedTranslations]);

    const t = useCallback((key: string): string => {
        if (isLoading) {
            return key; // Or some loading indicator string
        }

        const parts = key.split(':');
        let namespace: string;
        let path: string;

        if (parts.length === 2) {
            [namespace, path] = parts;
        } else {
            // Default to the first namespace if not specified, or a 'common' default
            const nsArray = Array.isArray(namespaces) ? namespaces : [namespaces];
            namespace = nsArray[0] || 'common';
            path = parts[0];
        }

        const segments = path.split('.');
        let node: TranslationEntry | undefined = translations[namespace];

        if (node === undefined) {
            // console.warn(`Translation namespace "${namespace}" not loaded or empty.`);
            return key; // Namespace not found
        }

        for (const seg of segments) {
            if (typeof node !== 'object' || node === null) {
                // console.warn(`Invalid path segment "${seg}" in key "${key}" or node is not an object.`);
                return key; // Path is invalid, or node is a leaf prematurely
            }
            node = (node as TranslationNamespace)[seg];
            if (node === undefined) {
                // console.warn(`Translation key "${key}" not found in namespace "${namespace}".`);
                return key; // Key not found
            }
        }

        if (typeof node === 'string') {
            return node;
        } else {
            // console.warn(`Translation key "${key}" found but it's not a string.`);
            return key; // Key found but not a string
        }
    }, [translations, isLoading, namespaces]);

    return { t, currentLocale, isLoading };
}

// New function to get translations on the server-side
// This function will read files directly, not using dynamic imports if not needed or problematic in server context
// For Next.js, dynamic imports work in RSC, but direct read might be preferred by some.
// However, to keep consistency with how we load on client, we can try dynamic import here too.
export const getTranslationsForServer = async (locale: Locale, namespaces: string | string[] = 'common'): Promise<AllTranslations> => {
    const nsArray = Array.isArray(namespaces) ? namespaces : [namespaces];
    const loadedTranslations: AllTranslations = {};

    for (const ns of nsArray) {
        // Dynamic import should work in Node.js environments like Next.js server components
        try {
            const mod = await import(`@/locales/${locale}/${ns}.json`);
            loadedTranslations[ns] = mod.default || mod;
        } catch (error) {
            console.error(`Failed to load server translations for locale: ${locale}, namespace: ${ns}`, error);
            loadedTranslations[ns] = {};
        }
    }
    return loadedTranslations;
};

// Helper function to be used with getTranslationsForServer to provide a 't' function
export const createTFromServer = (loadedTranslations: AllTranslations, defaultNamespace: string = 'common') => {
    return (key: string): string => {
        const parts = key.split(':');
        let namespace: string;
        let path: string;

        if (parts.length === 2) {
            [namespace, path] = parts;
        } else {
            namespace = defaultNamespace;
            path = parts[0];
        }

        const segments = path.split('.');
        let node: TranslationEntry | undefined = loadedTranslations[namespace];

        if (node === undefined) return key;

        for (const seg of segments) {
            if (typeof node !== 'object' || node === null) return key;
            node = (node as TranslationNamespace)[seg];
            if (node === undefined) return key;
        }

        return typeof node === 'string' ? node : key;
    };
};
