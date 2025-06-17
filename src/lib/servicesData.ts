// src/lib/servicesData.ts

const videoIds = {
    brand: "3S8BE5M0fI0",
    lifestyle: "y_oWn83xevQ"
};

export interface Tier {
    name: string;
    perfectFor: string;
    strategy?: string[];
    production?: string[];
    deliverables: string[];
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
        title: "Brand Story Elevation",
        slug: "brand", // Manually defined slug
        video: videoIds.brand,
        shortDesc:
            "A punchy, cinematic film that distils your brand DNA into a compelling \
       1.5-2 minute story. Perfect for website hero banners and ad pre‑roll.",
        priceFrom: "385", // Updated to reflect the lowest new price
        pageTitle: "Brand Story Elevation: Making Your Brand Impactful",
        pageDescription: "Today, attention moves at the speed of a swipe. Our Brand Story Elevation Service turns your restaurant’s personality, craft, and atmosphere into scroll-stopping video and photo content that looks, feels, and tastes like your brand. From a single half-day shoot to a multi-location cinematic production, each tier below is built to give you exactly the volume, polish, and strategic guidance you need.",
        tiers: [
            {
                name: "Social Spark",
                perfectFor: "Ideal for showcasing your brand with a focused content package.",
                strategy: ["1 x pre-shoot content strategie meeting"],
                production: ["1 × halve dag shoot (≈ 4-5 uur, één locatie)"],
                deliverables: [
                    "1 x flagship brand film (≈ 2 minuten lang) OR 5 x social media reels (≈ 20-30 seconden lang)",
                    "10 x volledig bewerkte foto’s"
                ],
                serviceFeatures: [
                    "1 x feedback ronde",
                    "3 werkdagen oplevering (na dag van filmen)"
                ],
                price: "€385"
            },
            {
                name: "Pro Momentum",
                perfectFor: "For a comprehensive brand narrative and social media presence.",
                strategy: ["1 x pre-shoot content strategie meeting"],
                production: ["1 × volle dag shoot (≈ 7-8 uur, één locatie)"],
                deliverables: [
                    "1 x flagship brand film ≈ 2 minuten lang",
                    "3 x social media reels (≈ 20-30 seconden lang)",
                    "25 x volledig bewerkte foto’s"
                ],
                serviceFeatures: [
                    "1 x feedback ronde",
                    "5 werkdagen oplevering (na dag van filmen)"
                ],
                price: "€575"
            },
            {
                name: "Content Momentum",
                perfectFor: "Ultimate content creation for maximum impact across multiple platforms.",
                strategy: ["1 x pre-shoot content strategie meeting"],
                production: ["volle dagen shoots (≈ 7-8 uur, meerdere locaties)"],
                deliverables: [
                    "1 x op maat gemaakte flagship brand film",
                    "5 x social media reels (≈ 20-30 seconden lang)",
                    "40 x volledig bewerkte foto’s"
                ],
                serviceFeatures: [
                    "2 x feedback rondes",
                    "7 werkdagen oplevering (na dag van filmen)"
                ],
                price: "€1050"
            }
        ]
    },
    {
        title: "Dynamic Photoshoot",
        slug: "dynamic-photoshoot",
        video: "",
        shortDesc: "Professional on-location photoshoots including live photos and short form hero shots. Perfect for capturing dynamic images of individuals or products.",
        priceFrom: "150",
        pageTitle: "Dynamic Photoshoot: On-Location Photography",
        pageDescription: "Our Dynamic Photoshoot service offers flexible on-location photography. We specialize in creating vibrant images, including live photos and short hero shots, tailored to your needs. Please note that specific packages and pricing are being finalized. Contact us for a custom consultation.",
        tiers: [
            {
                name: "Starter On-Location Shoot",
                perfectFor: "Individuals or small businesses looking for a quick, professional photoshoot.",
                strategy: ["Consultation to define shoot goals and location specifics"],
                production: ["1-hour on-location photo session"],
                deliverables: [
                    "Set of professionally edited digital images",
                    "Online gallery for viewing and downloading photos",
                    "Includes a selection of live photos and short form hero shots"
                ],
                serviceFeatures: [
                    "Quick turnaround time",
                    "Travel within Amsterdam included (additional travel may incur extra cost)"
                ],
                price: "€175"
            }
        ]
    },
    {
        title: "Lifestyle / Event Showcase",
        slug: "lifestyle-event-showcase", // Manually defined slug
        video: videoIds.lifestyle,
        shortDesc:
            "We capture authentic, aspirational day‑in‑the‑life footage to connect \
       your product with the lifestyle your audience dreams of.",
        priceFrom: "395",
        pageTitle: "Lifestyle & Event Showcase: Capturing Authentic Moments",
        pageDescription: "Showcase the vibrant lifestyle your brand embodies or the unforgettable atmosphere of your events. We craft compelling visual narratives that connect with your audience on an emotional level.",
        tiers: [
            {
                name: "Essential Lifestyle Package",
                perfectFor: "Small brands or events needing a concise, impactful showcase.",
                production: ["1 x half-day shoot (≈ 4h, one location)"],
                deliverables: ["1 x highlight video (1.5-2 minutes)", "2 x social media clips (15-30s)", "15 x edited photos"],
                serviceFeatures: ["1 feedback round", "3 working days delivery"],
                price: "€395"
            },
            {
                name: "Comprehensive Event Coverage",
                perfectFor: "Larger events or campaigns needing extensive footage.",
                production: ["1 x full-day shoot (≈ 8h, multi-angle)"],
                deliverables: ["1 x main event film (3-5 minutes)", "5 x social media reels", "50 x edited photos"],
                serviceFeatures: ["2 feedback rounds", "7 working days delivery"],
                price: "€600"
            }
        ]
    },
    {
        title: "Wedding Films",
        slug: "wedding-films", // Manually defined slug
        video: "",
        shortDesc:
            "From bridal prep to dance‑floor, every tear & laugh wrapped into a \
       timeless highlight film—delivered in beautiful 4K HDR.",
        priceFrom: "380",
        pageTitle: "Cinematic Wedding Films: Your Love Story, Beautifully Told",
        pageDescription: "Preserve the magic of your wedding day with a breathtaking cinematic film. We capture every emotion, from the intimate moments of preparation to the joyous celebration on the dance floor, delivering a timeless keepsake in stunning 4K HDR.",
        tiers: [
            {
                name: "Highlight Reel Package",
                perfectFor: "Capturing the essence of your special day.",
                production: ["6 hours coverage"],
                deliverables: ["1 x cinematic highlight film (3-5 minutes)", "Online gallery"],
                serviceFeatures: ["Consultation call", "Drone footage (location permitting)"],
                price: "1200"
            },
            {
                name: "Feature Film Package",
                perfectFor: "A comprehensive story of your wedding day.",
                production: ["Full day coverage (10 hours)"],
                deliverables: ["1 x feature film (15-20 minutes)", "1 x highlight film (3-5 minutes)", "Full ceremony & speeches edit", "USB delivery"],
                serviceFeatures: ["Two cinematographers", "Extended consultation", "Drone footage"],
                price: "2500"
            }
        ]
    },
];