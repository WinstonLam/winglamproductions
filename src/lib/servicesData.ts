// src/lib/servicesData.ts

const videoIds = {
    brand: "3S8BE5M0fI0",
    lifestyle: "y_oWn83xevQ"
};

// 1. Modify the Tier and Service interfaces
export interface Tier {
    nameKey: string;
    originalName?: string;
    perfectForKey: string;
    strategyKey?: string;
    productionKey?: string;
    deliverablesKey: string;
    serviceFeaturesKey: string;
    price: string;
}

export interface Service {
    titleKey: string;
    slug: string;
    video: string;
    shortDescKey: string;
    priceFrom?: string | null;
    pageTitleKey?: string;
    pageDescriptionKey: string;
    tiers: Tier[];
}

export const servicesData: Service[] = [
    {
        titleKey: "servicesPage.servicesList.brand.title",
        slug: "brand",
        video: videoIds.brand,
        shortDescKey: "servicesPage.servicesList.brand.shortDesc",
        priceFrom: "375",
        pageTitleKey: "servicesPage.servicesList.brand.detailPage.pageTitle",
        pageDescriptionKey: "servicesPage.servicesList.brand.detailPage.pageDescription",
        tiers: [
            {
                nameKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.name",
                originalName: "Standard Launch Tier",
                perfectForKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.perfectFor",
                strategyKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.strategy",
                productionKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.production",
                deliverablesKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.brand.detailPage.tiers.Standard Launch Tier.serviceFeatures",
                price: "€375"
            },
            {
                nameKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.name",
                originalName: "Pro Momentum Tier",
                perfectForKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.perfectFor",
                strategyKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.strategy",
                productionKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.production",
                deliverablesKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.brand.detailPage.tiers.Pro Momentum Tier.serviceFeatures",
                price: "€550"
            },
            {
                nameKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.name",
                originalName: "Custom Quote",
                perfectForKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.perfectFor",
                strategyKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.strategy",
                productionKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.production",
                deliverablesKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.brand.detailPage.tiers.Custom Quote.serviceFeatures",
                price: "from €1250"
            }
        ]
    },
    {
        titleKey: "servicesPage.servicesList.lifestyle-event-showcase.title",
        slug: "lifestyle-event-showcase",
        video: videoIds.lifestyle,
        shortDescKey: "servicesPage.servicesList.lifestyle-event-showcase.shortDesc",
        priceFrom: "395",
        pageTitleKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.pageTitle", // Assuming this key will exist
        pageDescriptionKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.pageDescription", // Assuming this key will exist
        tiers: [ // Original tier data for this service, needs full refactor later
            {
                nameKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Essential Lifestyle Package.name",
                originalName: "Essential Lifestyle Package",
                perfectForKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Essential Lifestyle Package.perfectFor",
                // strategyKey, productionKey etc. would follow the same pattern
                // For now, map existing deliverables and serviceFeatures to their new key names,
                // assuming they point to arrays in the JSON.
                productionKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Essential Lifestyle Package.production", // Placeholder key
                deliverablesKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Essential Lifestyle Package.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Essential Lifestyle Package.serviceFeatures",
                price: "€395"
            },
            {
                nameKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Comprehensive Event Coverage.name",
                originalName: "Comprehensive Event Coverage",
                perfectForKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Comprehensive Event Coverage.perfectFor",
                productionKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Comprehensive Event Coverage.production", // Placeholder
                deliverablesKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Comprehensive Event Coverage.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.lifestyle-event-showcase.detailPage.tiers.Comprehensive Event Coverage.serviceFeatures",
                price: "€600"
            }
        ]
    },
    {
        titleKey: "servicesPage.servicesList.social-media-burst.title",
        slug: "social-media-burst",
        video: "",
        shortDescKey: "servicesPage.servicesList.social-media-burst.shortDesc",
        priceFrom: "380",
        pageTitleKey: "servicesPage.servicesList.social-media-burst.detailPage.pageTitle", // Placeholder
        pageDescriptionKey: "servicesPage.servicesList.social-media-burst.detailPage.pageDescription", // Placeholder
        tiers: [ // Tiers need full refactor to use keys
            {
                nameKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Starter Social Pack.name",
                originalName: "Starter Social Pack",
                perfectForKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Starter Social Pack.perfectFor",
                deliverablesKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Starter Social Pack.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Starter Social Pack.serviceFeatures",
                price: "€300"
            },
            {
                nameKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Monthly Social Retainer.name",
                originalName: "Monthly Social Retainer",
                perfectForKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Monthly Social Retainer.perfectFor",
                deliverablesKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Monthly Social Retainer.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.social-media-burst.detailPage.tiers.Monthly Social Retainer.serviceFeatures",
                price: "€550"
            }
        ]
    },
    {
        titleKey: "servicesPage.servicesList.wedding-films.title",
        slug: "wedding-films",
        video: "",
        shortDescKey: "servicesPage.servicesList.wedding-films.shortDesc",
        priceFrom: "380",
        pageTitleKey: "servicesPage.servicesList.wedding-films.detailPage.pageTitle", // Placeholder
        pageDescriptionKey: "servicesPage.servicesList.wedding-films.detailPage.pageDescription", // Placeholder
        tiers: [ // Tiers need full refactor to use keys
            {
                nameKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Highlight Reel Package.name",
                originalName: "Highlight Reel Package",
                perfectForKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Highlight Reel Package.perfectFor",
                productionKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Highlight Reel Package.production", // Placeholder
                deliverablesKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Highlight Reel Package.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Highlight Reel Package.serviceFeatures",
                price: "1200"
            },
            {
                nameKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Feature Film Package.name",
                originalName: "Feature Film Package",
                perfectForKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Feature Film Package.perfectFor",
                productionKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Feature Film Package.production", // Placeholder
                deliverablesKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Feature Film Package.deliverables",
                serviceFeaturesKey: "servicesPage.servicesList.wedding-films.detailPage.tiers.Feature Film Package.serviceFeatures",
                price: "2500"
            }
        ]
    },
];