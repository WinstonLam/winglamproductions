// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, Service } from "@/lib/servicesData";
import ServiceDetailClientPage from "./service-detail-client-page";

// ---------- Page component ----------
export default async function ServiceDetailPage({
    params,                       // <── promise!
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;             // ✅ unwrap first
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
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;             // ✅ unwrap first
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) return { title: "Service Not Found" };

    return {
        title: service.pageTitle ?? service.title,
        description: service.pageDescription,
    };
}
