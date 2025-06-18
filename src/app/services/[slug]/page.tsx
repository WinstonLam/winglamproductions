import { notFound } from 'next/navigation';
import { use } from 'react'
import ServiceDetailClientPage from './service-detail-client-page';
import { servicesData } from '@/lib/servicesData';


/** Server component: selects the right service by slug */
export default function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: keyof typeof servicesData }>  // ✅ async params
}) {
    const { slug } = use(params)                          // or: const { slug } = await params inside an async fn
    const service = servicesData[slug]

    if (!service) notFound()
    return <ServiceDetailClientPage service={service} />
}

/** Optional: statically pre-build every service detail page */
export async function generateStaticParams() {
    // Assert that the keys are of the specific union type
    const slugs = Object.keys(servicesData) as Array<keyof typeof servicesData>;
    return slugs.map(slug => ({
        slug: slug, // slug is now correctly typed as keyof typeof servicesData
    }));
}
