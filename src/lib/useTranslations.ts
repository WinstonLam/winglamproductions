import { useState, useEffect } from 'react';

// Define Locale type (as it was)
export type Locale = 'en' | 'nl'; // Or dynamically from available locale folders if preferred

// Define a type for the translations object (can be generic)
type Translations = Record<string, any>;

export function useTranslations(locale: Locale, namespaces: string[] = ['common']) {
    const [translations, setTranslations] = useState<Translations>({});
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const loadTranslations = async () => {
            setLoading(true);
            const newTranslations: Translations = {};
            for (const ns of namespaces) {
                try {
                    // Dynamically import the namespace JSON file for the current locale
                    const module = await import(`@/locales/${locale}/${ns}.json`);
                    // Merge translations from this namespace into the main object
                    // Ensure deep merging if necessary, for now, simple spread should work if keys are unique across top-level of namespaces
                    // or if namespaces themselves are top-level keys in the final merged object.
                    // For simplicity, let's assume namespaces become top-level keys.
                    newTranslations[ns] = module.default;
                } catch (error) {
                    console.error(`Failed to load translations for namespace "${ns}" and locale "${locale}":`, error);
                    // Optionally, set some default/fallback for this namespace or handle error
                    newTranslations[ns] = {}; // Default to empty object on error for this namespace
                }
            }
            setTranslations(newTranslations);
            setLoading(false);
        };

        loadTranslations();
    }, [locale, JSON.stringify(namespaces)]); // Re-run if locale or namespaces change (stringify for array dependency)

    // Change the return type of the function
    function t(key: string): any { // Return 'any' or a more specific union type like string | string[] | Record<string, any>
        if (loading) {
            return key;
        }
        const keys = key.split('.');
        const namespace = keys[0];
        const actualKeyPath = keys.slice(1); // Keep as array for traversal

        let currentResult: any = translations[namespace];

        if (currentResult === undefined) {
            // console.warn(`Namespace "${namespace}" not found for key "${key}"`);
            return key;
        }

        for (const k of actualKeyPath) {
            currentResult = currentResult?.[k];
            if (currentResult === undefined) {
                // console.warn(`Translation not found for key "${key}" (path: "${actualKeyPath.join('.')}" in namespace "${namespace}")`);
                return key;
            }
        }
        // Return the resolved value, which could be a string, array, or object
        return currentResult;
    }

    // Return loading state as well, so components can choose to show a loader or fallback
    // The type of t in the return object is implicitly updated by TypeScript due to the function's new signature.
    return { t, loading, currentLocale: locale };
}
