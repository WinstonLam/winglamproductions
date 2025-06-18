// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, Service } from "@/lib/servicesData";
import ServiceDetailClientPage from "./service-detail-client-page";
import enTranslations from '@/locales/en.json'; // Direct import for metadata

// Helper function to navigate the JSON structure for translations
const getTranslation = (translations: Record<string, any>, key: string | undefined): string => {
    if (!key) return "";
    // Navigate through nested keys like "services.brand.title"
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
            result = result[k];
        } else {
            // Key not found, return the key itself as a fallback
            return key;
        }
    }
    return typeof result === 'string' ? result : key; // Return string or fallback to key
};


// ---------- Page component ----------
export default async function ServiceDetailPage({
    params,
}: {
    params: { slug: string }; // Simplified: params are already resolved here
}) {
    const { slug } = params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) notFound();
    return <ServiceDetailClientPage service={service as Service} />;
}

// ---------- Static params ----------
export function generateStaticParams() {
    return servicesData.map(({ slug }) => ({ slug }));
}

// ---------- Dynamic metadata ----------
export async function generateMetadata(
    { params }: { params: { slug: string } } // Simplified: params are already resolved
): Promise<Metadata> {
    const { slug } = params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) return { title: "Service Not Found" };

    const titleKey = service.pageTitle || service.title;
    const descriptionKey = service.pageDescription;

    const metadataTitle = getTranslation(enTranslations, titleKey);
    const metadataDescription = getTranslation(enTranslations, descriptionKey);

    return {
        title: metadataTitle,
        description: metadataDescription,
        // Example for providing multiple locales if using path-based i18n
        // alternates: {
        //   languages: {
        //     'en': `/services/${slug}`, // Assuming no locale prefix for default (e.g., English)
        //     'nl': `/nl/services/${slug}`, // Assuming '/nl' prefix for Dutch
        //   },
        // },
    };
}
