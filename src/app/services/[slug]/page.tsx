// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, Service } from "@/lib/servicesData"; // Service type is now using *Key fields
import ServiceDetailClientPage from "./service-detail-client-page";
import { getTranslationsForServer, createTFromServer, Locale } from "@/lib/useTranslations";

// ---------- Page component ----------
export default async function ServiceDetailPage({
    params,
}: {
    // params may not be a promise here, Next.js resolves it.
    // Let's assume params is { slug: string } directly or after await if it were a Promise.
    // The original code had `await params` so we keep it for safety, though it might be pre-resolved.
    params: { slug: string } | Promise<{ slug: string }>;
}) {
    // Await params if it's a promise, or use directly if not.
    const resolvedParams = params instanceof Promise ? await params : params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }
    // The 'service' object passed to ServiceDetailClientPage now contains *Key fields
    return <ServiceDetailClientPage service={service as Service} />;
}

// ---------- Static params ----------
export function generateStaticParams() {
    // This should still work as slugs are not translated
    return servicesData.map(({ slug }) => ({ slug }));
}

// ---------- Dynamic metadata ----------
export async function generateMetadata(
    { params: paramsPromise }: { params: Promise<{ slug: string }> } // Keep original Promise type for params
): Promise<Metadata> {
    const { slug } = await paramsPromise; // Resolve the promise
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found", // Fallback title
            description: "The requested service could not be found." // Fallback description
        };
    }

    // Default to Dutch ('nl') for metadata as per requirements.
    // For a multi-locale site with path-based localization (e.g., /en/services/slug),
    // 'locale' would typically come from generateMetadata's second arg `parent` or params.
    const locale: Locale = 'nl';

    // Load translations for the 'services' namespace (where pageTitleKey and pageDescriptionKey are)
    // and 'serviceDetail' for any potential fallbacks or shared keys if necessary.
    // Based on servicesData.ts, pageTitleKey and pageDescriptionKey use the "services" namespace.
    const serverTranslations = await getTranslationsForServer(locale, ['services', 'serviceDetail']);
    const t = createTFromServer(serverTranslations, 'services'); // Default to 'services' namespace

    // Translate using the keys from servicesData
    // Fallback to service.titleKey if pageTitleKey is not present or doesn't translate
    const title = service.pageTitleKey ? t(service.pageTitleKey) : (service.titleKey ? t(service.titleKey) : "Service");
    const description = service.pageDescriptionKey ? t(service.pageDescriptionKey) : "Description not available.";

    return {
        title: title,
        description: description,
    };
}
