// src/lib/servicesData.ts

const videoIds = {
    brand: "LxFu2WuuxxI",
    lifestyle: "y_oWn83xevQ"
};

// Interfaces define the STRUCTURE, actual text supplied by i18n keys
export interface DeliverableChoice {
    type: 'choice';
    labelKey: string; // e.g., "serviceDetail:tierCard.deliverableChoiceLabel"
    optionKeys: string[]; // Array of translation keys for options
}

export interface Tier {
    nameKey: string;
    perfectForKey: string;
    strategyKeys?: string[];
    productionKeys?: string[];
    deliverableKeys: (string | DeliverableChoice)[]; // String keys or DeliverableChoice objects
    serviceFeatureKeys: string[];
    price: string; // Price remains as is, not typically translated in this format
    tierSlug: string; // Add a slug for unique key generation if name is not unique enough
}

export interface Service {
    titleKey: string;
    slug: string; // Slugs generally remain untranslated
    video: string;
    shortDescKey: string;
    priceFrom?: string | null;
    pageTitleKey?: string; // For <title> tag - handled by server component usually
    pageDescriptionKey: string; // For meta description - handled by server component
    tiers: Tier[];
}

export const servicesData: Service[] = [
    {
        titleKey: "services:servicesData.brand.title",
        slug: "brand",
        video: videoIds.brand,
        shortDescKey: "services:servicesData.brand.shortDesc",
        priceFrom: "385",
        pageTitleKey: "services:servicesData.brand.pageTitle",
        pageDescriptionKey: "services:servicesData.brand.pageDescription",
        tiers: [
            {
                tierSlug: "social-spark",
                nameKey: "serviceDetail:servicesData.brand.tiers.social-spark.name",
                perfectForKey: "serviceDetail:servicesData.brand.tiers.social-spark.perfectFor",
                strategyKeys: ["serviceDetail:servicesData.brand.tiers.social-spark.strategy.0"],
                productionKeys: ["serviceDetail:servicesData.brand.tiers.social-spark.production.0"],
                deliverableKeys: [
                    {
                        type: 'choice',
                        labelKey: 'serviceDetail:tierCard.deliverableChoiceLabel', // Common key
                        optionKeys: [
                            "serviceDetail:servicesData.brand.tiers.social-spark.deliverables.choice.0",
                            "serviceDetail:servicesData.brand.tiers.social-spark.deliverables.choice.1"
                        ]
                    },
                    "serviceDetail:servicesData.brand.tiers.social-spark.deliverables.1"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.brand.tiers.social-spark.serviceFeatures.0",
                    "serviceDetail:servicesData.brand.tiers.social-spark.serviceFeatures.1"
                ],
                price: "€385"
            },
            {
                tierSlug: "pro-momentum",
                nameKey: "serviceDetail:servicesData.brand.tiers.pro-momentum.name",
                perfectForKey: "serviceDetail:servicesData.brand.tiers.pro-momentum.perfectFor",
                strategyKeys: ["serviceDetail:servicesData.brand.tiers.pro-momentum.strategy.0"],
                productionKeys: ["serviceDetail:servicesData.brand.tiers.pro-momentum.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.brand.tiers.pro-momentum.deliverables.0",
                    "serviceDetail:servicesData.brand.tiers.pro-momentum.deliverables.1",
                    "serviceDetail:servicesData.brand.tiers.pro-momentum.deliverables.2"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.brand.tiers.pro-momentum.serviceFeatures.0",
                    "serviceDetail:servicesData.brand.tiers.pro-momentum.serviceFeatures.1"
                ],
                price: "€575"
            },
            {
                tierSlug: "content-momentum",
                nameKey: "serviceDetail:servicesData.brand.tiers.content-momentum.name",
                perfectForKey: "serviceDetail:servicesData.brand.tiers.content-momentum.perfectFor",
                strategyKeys: ["serviceDetail:servicesData.brand.tiers.content-momentum.strategy.0"],
                productionKeys: ["serviceDetail:servicesData.brand.tiers.content-momentum.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.brand.tiers.content-momentum.deliverables.0",
                    "serviceDetail:servicesData.brand.tiers.content-momentum.deliverables.1",
                    "serviceDetail:servicesData.brand.tiers.content-momentum.deliverables.2"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.brand.tiers.content-momentum.serviceFeatures.0",
                    "serviceDetail:servicesData.brand.tiers.content-momentum.serviceFeatures.1"
                ],
                price: "€1050"
            }
        ]
    },
    {
        titleKey: "services:servicesData.lifestyle-event-showcase.title",
        slug: "lifestyle-event-showcase",
        video: videoIds.lifestyle,
        shortDescKey: "services:servicesData.lifestyle-event-showcase.shortDesc",
        priceFrom: "395",
        pageTitleKey: "services:servicesData.lifestyle-event-showcase.pageTitle",
        pageDescriptionKey: "services:servicesData.lifestyle-event-showcase.pageDescription",
        tiers: [
            {
                tierSlug: "essential-lifestyle-package",
                nameKey: "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.name",
                perfectForKey: "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.perfectFor",
                productionKeys: ["serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.deliverables.0",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.deliverables.1",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.deliverables.2"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.serviceFeatures.0",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.essential-lifestyle-package.serviceFeatures.1"
                ],
                price: "€395"
            },
            {
                tierSlug: "comprehensive-event-coverage",
                nameKey: "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.name",
                perfectForKey: "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.perfectFor",
                productionKeys: ["serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.deliverables.0",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.deliverables.1",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.deliverables.2"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.serviceFeatures.0",
                    "serviceDetail:servicesData.lifestyle-event-showcase.tiers.comprehensive-event-coverage.serviceFeatures.1"
                ],
                price: "€600"
            }
        ]
    },
    {
        titleKey: "services:servicesData.dynamic-photoshoot.title",
        slug: "dynamic-photoshoot",
        video: "",
        shortDescKey: "services:servicesData.dynamic-photoshoot.shortDesc",
        priceFrom: "150",
        pageTitleKey: "services:servicesData.dynamic-photoshoot.pageTitle",
        pageDescriptionKey: "services:servicesData.dynamic-photoshoot.pageDescription",
        tiers: [
            {
                tierSlug: "starter-on-location-shoot",
                nameKey: "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.name",
                perfectForKey: "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.perfectFor",
                strategyKeys: ["serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.strategy.0"],
                productionKeys: ["serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.deliverables.0",
                    "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.deliverables.1",
                    "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.deliverables.2"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.serviceFeatures.0",
                    "serviceDetail:servicesData.dynamic-photoshoot.tiers.starter-on-location-shoot.serviceFeatures.1"
                ],
                price: "€175"
            }
        ]
    },
    {
        titleKey: "services:servicesData.wedding-films.title",
        slug: "wedding-films",
        video: "",
        shortDescKey: "services:servicesData.wedding-films.shortDesc",
        priceFrom: "380",
        pageTitleKey: "services:servicesData.wedding-films.pageTitle",
        pageDescriptionKey: "services:servicesData.wedding-films.pageDescription",
        tiers: [
            {
                tierSlug: "highlight-reel-package",
                nameKey: "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.name",
                perfectForKey: "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.perfectFor",
                productionKeys: ["serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.deliverables.0",
                    "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.deliverables.1"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.serviceFeatures.0",
                    "serviceDetail:servicesData.wedding-films.tiers.highlight-reel-package.serviceFeatures.1"
                ],
                price: "1200" // Assuming price is a string, not a number needing localization.
            },
            {
                tierSlug: "feature-film-package",
                nameKey: "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.name",
                perfectForKey: "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.perfectFor",
                productionKeys: ["serviceDetail:servicesData.wedding-films.tiers.feature-film-package.production.0"],
                deliverableKeys: [
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.deliverables.0",
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.deliverables.1",
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.deliverables.2",
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.deliverables.3"
                ],
                serviceFeatureKeys: [
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.serviceFeatures.0",
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.serviceFeatures.1",
                    "serviceDetail:servicesData.wedding-films.tiers.feature-film-package.serviceFeatures.2"
                ],
                price: "2500"
            }
        ]
    },
];