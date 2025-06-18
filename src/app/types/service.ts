export interface DeliverableChoice {
    type: 'choice';
    labelKey: string;
    options: string[];
}

export interface Tier {
    nameKey: string;
    perfectForKey: string;
    priceKey: string;
    strategy: string[];
    production: string[];
    deliverables: (string | DeliverableChoice)[];
    serviceFeatures?: string[];
}

export interface Service {
    slug: string;
    titleKey: string;
    shortDescKey: string;
    priceFromKey: string;
    videoIdKey: string;
    pageTitleKey: string;
    pageDescriptionKey: string;
    tiers?: Tier[];
}
