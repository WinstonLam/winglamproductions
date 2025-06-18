import { Service } from '@/app/types/service';

/**
 * Every string here is an i18next key that exists in your
 * `en.json` and `nl.json` (or any other locale you add).
 */
export const servicesData = {
    /* ─────────────────────────────────────────────────────────── BRAND ── */
    brand: {
        slug: 'brand',
        titleKey: 'services.brand.title',
        shortDescKey: 'services.brand.shortDesc',
        priceFromKey: 'services.brand.priceFrom',
        videoIdKey: 'services.brand.videoId',            // You added a YouTube ID
        pageTitleKey: 'services.brand.pageTitle',
        pageDescriptionKey: 'services.brand.pageDescription',

        tiers: [
            {
                nameKey: 'services.brand.tiers.socialSpark.name',
                perfectForKey: 'services.brand.tiers.socialSpark.perfectFor',
                priceKey: 'services.brand.tiers.socialSpark.price',
                strategy: [
                    'services.brand.tiers.socialSpark.strategy.item1',
                ],
                production: [
                    'services.brand.tiers.socialSpark.production.item1',
                ],
                deliverables: [
                    {
                        type: 'choice',
                        labelKey: 'services.brand.tiers.socialSpark.deliverables.choice1.label',
                        options: [
                            'services.brand.tiers.socialSpark.deliverables.choice1.optionA',
                            'services.brand.tiers.socialSpark.deliverables.choice1.optionB',
                        ],
                    },
                    'services.brand.tiers.socialSpark.deliverables.item1',
                ],
                serviceFeatures: [
                    'services.brand.tiers.socialSpark.serviceFeatures.item1',
                    'services.brand.tiers.socialSpark.serviceFeatures.item2',
                ],
            },
            {
                nameKey: 'services.brand.tiers.proMomentum.name',
                perfectForKey: 'services.brand.tiers.proMomentum.perfectFor',
                priceKey: 'services.brand.tiers.proMomentum.price',
                strategy: [
                    'services.brand.tiers.proMomentum.strategy.item1',
                ],
                production: [
                    'services.brand.tiers.proMomentum.production.item1',
                ],
                deliverables: [
                    'services.brand.tiers.proMomentum.deliverables.item1',
                    'services.brand.tiers.proMomentum.deliverables.item2',
                    'services.brand.tiers.proMomentum.deliverables.item3',
                ],
                serviceFeatures: [
                    'services.brand.tiers.proMomentum.serviceFeatures.item1',
                    'services.brand.tiers.proMomentum.serviceFeatures.item2',
                ],
            },
            {
                nameKey: 'services.brand.tiers.contentMomentum.name',
                perfectForKey: 'services.brand.tiers.contentMomentum.perfectFor',
                priceKey: 'services.brand.tiers.contentMomentum.price',
                strategy: [
                    'services.brand.tiers.contentMomentum.strategy.item1',
                ],
                production: [
                    'services.brand.tiers.contentMomentum.production.item1',
                ],
                deliverables: [
                    'services.brand.tiers.contentMomentum.deliverables.item1',
                    'services.brand.tiers.contentMomentum.deliverables.item2',
                    'services.brand.tiers.contentMomentum.deliverables.item3',
                ],
                serviceFeatures: [
                    'services.brand.tiers.contentMomentum.serviceFeatures.item1',
                    'services.brand.tiers.contentMomentum.serviceFeatures.item2',
                ],
            },
        ],
    },

    /* ─────────────────────────── LIFESTYLE / EVENT SHOWCASE ── */
    'lifestyle-event-showcase': {
        slug: 'lifestyle-event-showcase',
        titleKey: 'services.lifestyle-event-showcase.title',
        shortDescKey: 'services.lifestyle-event-showcase.shortDesc',
        priceFromKey: 'services.lifestyle-event-showcase.priceFrom',
        pageTitleKey: 'services.lifestyle-event-showcase.pageTitle',
        videoIdKey: 'services.lifestyle-event-showcase.videoId',            // You added a YouTube ID

        pageDescriptionKey: 'services.lifestyle-event-showcase.pageDescription',
        tiers: [
            {
                nameKey: 'services.lifestyle-event-showcase.tiers.essentialLifestyle.name',
                perfectForKey: 'services.lifestyle-event-showcase.tiers.essentialLifestyle.perfectFor',
                priceKey: 'services.lifestyle-event-showcase.tiers.essentialLifestyle.price',
                strategy: [
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.strategy.item1',
                ],
                production: [
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.production.item1',
                ],
                deliverables: [
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.deliverables.item1',
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.deliverables.item2',
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.deliverables.item3',
                ],
                serviceFeatures: [
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.serviceFeatures.item1',
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.serviceFeatures.item2',
                ],
            },
            {
                nameKey: 'services.lifestyle-event-showcase.tiers.comprehensiveEvent.name',
                perfectForKey: 'services.lifestyle-event-showcase.tiers.comprehensiveEvent.perfectFor',
                priceKey: 'services.lifestyle-event-showcase.tiers.comprehensiveEvent.price',
                strategy: [
                    'services.lifestyle-event-showcase.tiers.essentialLifestyle.strategy.item1',
                ],
                production: [
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.production.item1',
                ],
                deliverables: [
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.deliverables.item1',
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.deliverables.item2',
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.deliverables.item3',
                ],
                serviceFeatures: [
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.serviceFeatures.item1',
                    'services.lifestyle-event-showcase.tiers.comprehensiveEvent.serviceFeatures.item2',
                ],
            },
        ],
    },

    /* ───────────────────────────────────── DYNAMIC PHOTOSHOOT ── */
    'dynamic-photoshoot': {
        slug: 'dynamic-photoshoot',
        titleKey: 'services.dynamic-photoshoot.title',
        shortDescKey: 'services.dynamic-photoshoot.shortDesc',
        priceFromKey: 'services.dynamic-photoshoot.priceFrom',
        videoIdKey: 'services.dynamic-photoshoot.videoId',
        pageTitleKey: 'services.dynamic-photoshoot.pageTitle',
        pageDescriptionKey: 'services.dynamic-photoshoot.pageDescription',

        tiers: [
            {
                nameKey: 'services.dynamic-photoshoot.tiers.starterOnLocation.name',
                perfectForKey: 'services.dynamic-photoshoot.tiers.starterOnLocation.perfectFor',
                priceKey: 'services.dynamic-photoshoot.tiers.starterOnLocation.price',
                strategy: [
                    'services.dynamic-photoshoot.tiers.starterOnLocation.strategy.item1',
                ],
                production: [
                    'services.dynamic-photoshoot.tiers.starterOnLocation.production.item1',
                ],
                deliverables: [
                    'services.dynamic-photoshoot.tiers.starterOnLocation.deliverables.item1',
                    'services.dynamic-photoshoot.tiers.starterOnLocation.deliverables.item2',
                    'services.dynamic-photoshoot.tiers.starterOnLocation.deliverables.item3',
                ],
                serviceFeatures: [
                    'services.dynamic-photoshoot.tiers.starterOnLocation.serviceFeatures.item1',
                    'services.dynamic-photoshoot.tiers.starterOnLocation.serviceFeatures.item2',
                ],
            },
        ],
    },

    /* ─────────────────────────────────────────── WEDDING FILMS ── */
    'wedding-films': {
        slug: 'wedding-films',
        titleKey: 'services.wedding-films.title',
        shortDescKey: 'services.wedding-films.shortDesc',
        priceFromKey: 'services.wedding-films.priceFrom',
        videoIdKey: 'services.dynamic-photoshoot.videoId',            // You added a YouTube ID
        pageTitleKey: 'services.wedding-films.pageTitle',
        pageDescriptionKey: 'services.wedding-films.pageDescription',

        tiers: [
            {
                nameKey: 'services.wedding-films.tiers.highlightReel.name',
                perfectForKey: 'services.wedding-films.tiers.highlightReel.perfectFor',
                priceKey: 'services.wedding-films.tiers.highlightReel.price',
                strategy: [
                    'services.wedding-films.tiers.highlightReel.strategy.item1',
                ],
                production: [
                    'services.wedding-films.tiers.highlightReel.production.item1',
                ],
                deliverables: [
                    'services.wedding-films.tiers.highlightReel.deliverables.item1',
                    'services.wedding-films.tiers.highlightReel.deliverables.item2',
                ],
                serviceFeatures: [
                    'services.wedding-films.tiers.highlightReel.serviceFeatures.item1',
                    'services.wedding-films.tiers.highlightReel.serviceFeatures.item2',
                ],
            },
            {
                nameKey: 'services.wedding-films.tiers.featureFilm.name',
                perfectForKey: 'services.wedding-films.tiers.featureFilm.perfectFor',
                priceKey: 'services.wedding-films.tiers.featureFilm.price',
                strategy: [
                    'services.wedding-films.tiers.featureFilm.strategy.item1',
                ],
                production: [
                    'services.wedding-films.tiers.featureFilm.production.item1',
                ],
                deliverables: [
                    'services.wedding-films.tiers.featureFilm.deliverables.item1',
                    'services.wedding-films.tiers.featureFilm.deliverables.item2',
                    'services.wedding-films.tiers.featureFilm.deliverables.item3',
                    'services.wedding-films.tiers.featureFilm.deliverables.item4',
                ],
                serviceFeatures: [
                    'services.wedding-films.tiers.featureFilm.serviceFeatures.item1',
                    'services.wedding-films.tiers.featureFilm.serviceFeatures.item2',
                    'services.wedding-films.tiers.featureFilm.serviceFeatures.item3',
                ],
            },
        ],
    },
} as const satisfies Record<string, Service>;
