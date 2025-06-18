// src/lib/servicesData.ts

const videoIds = {
    brand: "LxFu2WuuxxI",
    lifestyle: "y_oWn83xevQ"
};

export interface DeliverableChoice {
    type: 'choice';
    label: string; // e.g., "Choose one of the following"
    options: string[]; // The actual options to choose from
}

export interface Tier {
    name: string;
    perfectFor: string;
    strategy?: string[];
    production?: string[];
    deliverables: (string | DeliverableChoice)[]; // Now can be string or DeliverableChoice
    serviceFeatures: string[]; // Renamed from 'service'
    price: string;
}

export interface Service {
    title: string;
    slug: string;
    video: string;
    shortDesc: string;
    priceFrom?: string | null;
    pageTitle?: string;
    pageDescription: string;
    tiers: Tier[];
}

export const servicesData: Service[] = [
    {
        title: "services.brand.title",
        slug: "brand", // Manually defined slug
        video: videoIds.brand,
        shortDesc: "services.brand.shortDesc",
        priceFrom: "services.brand.priceFrom",
        pageTitle: "services.brand.pageTitle",
        pageDescription: "services.brand.pageDescription",
        tiers: [
            {
                name: "services.brand.tiers.0.name",
                perfectFor: "services.brand.tiers.0.perfectFor",
                strategy: ["services.brand.tiers.0.strategy.0"],
                production: ["services.brand.tiers.0.production.0"],
                deliverables: [
                    {
                        type: 'choice',
                        label: "services.brand.tiers.0.deliverables.0.label",
                        options: [
                            "services.brand.tiers.0.deliverables.0.options.0",
                            "services.brand.tiers.0.deliverables.0.options.1"
                        ]
                    },
                    "services.brand.tiers.0.deliverables.1"
                ],
                serviceFeatures: [
                    "services.brand.tiers.0.serviceFeatures.0",
                    "services.brand.tiers.0.serviceFeatures.1"
                ],
                price: "services.brand.tiers.0.price"
            },
            {
                name: "services.brand.tiers.1.name",
                perfectFor: "services.brand.tiers.1.perfectFor",
                strategy: ["services.brand.tiers.1.strategy.0"],
                production: ["services.brand.tiers.1.production.0"],
                deliverables: [
                    "services.brand.tiers.1.deliverables.0",
                    "services.brand.tiers.1.deliverables.1",
                    "services.brand.tiers.1.deliverables.2"
                ],
                serviceFeatures: [
                    "services.brand.tiers.1.serviceFeatures.0",
                    "services.brand.tiers.1.serviceFeatures.1"
                ],
                price: "services.brand.tiers.1.price"
            },
            {
                name: "services.brand.tiers.2.name",
                perfectFor: "services.brand.tiers.2.perfectFor",
                strategy: ["services.brand.tiers.2.strategy.0"],
                production: ["services.brand.tiers.2.production.0"],
                deliverables: [
                    "services.brand.tiers.2.deliverables.0",
                    "services.brand.tiers.2.deliverables.1",
                    "services.brand.tiers.2.deliverables.2"
                ],
                serviceFeatures: [
                    "services.brand.tiers.2.serviceFeatures.0",
                    "services.brand.tiers.2.serviceFeatures.1"
                ],
                price: "services.brand.tiers.2.price"
            }
        ]
    },
    {
        title: "services.lifestyle-event-showcase.title",
        slug: "lifestyle-event-showcase", // Manually defined slug
        video: videoIds.lifestyle,
        shortDesc: "services.lifestyle-event-showcase.shortDesc",
        priceFrom: "services.lifestyle-event-showcase.priceFrom",
        pageTitle: "services.lifestyle-event-showcase.pageTitle",
        pageDescription: "services.lifestyle-event-showcase.pageDescription",
        tiers: [
            {
                name: "services.lifestyle-event-showcase.tiers.0.name",
                perfectFor: "services.lifestyle-event-showcase.tiers.0.perfectFor",
                strategy: [], // Explicitly added empty array
                production: ["services.lifestyle-event-showcase.tiers.0.production.0"],
                deliverables: [
                    "services.lifestyle-event-showcase.tiers.0.deliverables.0",
                    "services.lifestyle-event-showcase.tiers.0.deliverables.1",
                    "services.lifestyle-event-showcase.tiers.0.deliverables.2"
                ],
                serviceFeatures: [
                    "services.lifestyle-event-showcase.tiers.0.serviceFeatures.0",
                    "services.lifestyle-event-showcase.tiers.0.serviceFeatures.1"
                ],
                price: "services.lifestyle-event-showcase.tiers.0.price"
            },
            {
                name: "services.lifestyle-event-showcase.tiers.1.name",
                perfectFor: "services.lifestyle-event-showcase.tiers.1.perfectFor",
                strategy: [], // Explicitly added empty array
                production: ["services.lifestyle-event-showcase.tiers.1.production.0"],
                deliverables: [
                    "services.lifestyle-event-showcase.tiers.1.deliverables.0",
                    "services.lifestyle-event-showcase.tiers.1.deliverables.1",
                    "services.lifestyle-event-showcase.tiers.1.deliverables.2"
                ],
                serviceFeatures: [
                    "services.lifestyle-event-showcase.tiers.1.serviceFeatures.0",
                    "services.lifestyle-event-showcase.tiers.1.serviceFeatures.1"
                ],
                price: "services.lifestyle-event-showcase.tiers.1.price"
            }
        ]
    },
    {
        title: "services.dynamic-photoshoot.title",
        slug: "dynamic-photoshoot",
        video: "",
        shortDesc: "services.dynamic-photoshoot.shortDesc",
        priceFrom: "services.dynamic-photoshoot.priceFrom",
        pageTitle: "services.dynamic-photoshoot.pageTitle",
        pageDescription: "services.dynamic-photoshoot.pageDescription",
        tiers: [
            {
                name: "services.dynamic-photoshoot.tiers.0.name",
                perfectFor: "services.dynamic-photoshoot.tiers.0.perfectFor",
                strategy: ["services.dynamic-photoshoot.tiers.0.strategy.0"],
                production: ["services.dynamic-photoshoot.tiers.0.production.0"],
                deliverables: [
                    "services.dynamic-photoshoot.tiers.0.deliverables.0",
                    "services.dynamic-photoshoot.tiers.0.deliverables.1",
                    "services.dynamic-photoshoot.tiers.0.deliverables.2"
                ],
                serviceFeatures: [
                    "services.dynamic-photoshoot.tiers.0.serviceFeatures.0",
                    "services.dynamic-photoshoot.tiers.0.serviceFeatures.1"
                ],
                price: "services.dynamic-photoshoot.tiers.0.price"
            }
        ]
    },
    {
        title: "services.wedding-films.title",
        slug: "wedding-films", // Manually defined slug
        video: "",
        shortDesc: "services.wedding-films.shortDesc",
        priceFrom: "services.wedding-films.priceFrom",
        pageTitle: "services.wedding-films.pageTitle",
        pageDescription: "services.wedding-films.pageDescription",
        tiers: [
            {
                name: "services.wedding-films.tiers.0.name",
                perfectFor: "services.wedding-films.tiers.0.perfectFor",
                strategy: [], // Explicitly added empty array
                production: ["services.wedding-films.tiers.0.production.0"],
                deliverables: [
                    "services.wedding-films.tiers.0.deliverables.0",
                    "services.wedding-films.tiers.0.deliverables.1"
                ],
                serviceFeatures: [
                    "services.wedding-films.tiers.0.serviceFeatures.0",
                    "services.wedding-films.tiers.0.serviceFeatures.1"
                ],
                price: "services.wedding-films.tiers.0.price"
            },
            {
                name: "services.wedding-films.tiers.1.name",
                perfectFor: "services.wedding-films.tiers.1.perfectFor",
                strategy: [], // Explicitly added empty array
                production: ["services.wedding-films.tiers.1.production.0"],
                deliverables: [
                    "services.wedding-films.tiers.1.deliverables.0",
                    "services.wedding-films.tiers.1.deliverables.1",
                    "services.wedding-films.tiers.1.deliverables.2",
                    "services.wedding-films.tiers.1.deliverables.3"
                ],
                serviceFeatures: [
                    "services.wedding-films.tiers.1.serviceFeatures.0",
                    "services.wedding-films.tiers.1.serviceFeatures.1",
                    "services.wedding-films.tiers.1.serviceFeatures.2"
                ],
                price: "services.wedding-films.tiers.1.price"
            }
        ]
    }
];
