// src/lib/servicesData.ts

const videoIds = {
    brand: "W9pzgz4NTZY",
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
       60‑second story—perfect for website hero banners and ad pre‑roll.",
        priceFrom: "380",
        pageTitle: "Brand Story Elevation: Making Your Brand Impactful",
        pageDescription: "Today, attention moves at the speed of a swipe. Our Brand Story Elevation Service turns your restaurant’s personality, craft, and atmosphere into scroll-stopping video and photo content that looks, feels, and tastes like your brand. From a single half-day shoot to a multi-location cinematic production, each tier below is built to give you exactly the volume, polish, and strategic guidance you need.",
        tiers: [
            {
                name: "Standard Launch Tier",
                perfectFor: "Polished content fast for a menu revamp, soft opening or re-brand",
                strategy: ["1 x pre-shoot content strategy meeting"],
                production: ["1 × half-day shoot (≈ 4 h, one location)"],
                deliverables: [
                    "1 x hero video edit of 1-2 minutes long",
                    "3 x 15-30 seconds social media vertical reels",
                    "20 x fully edited photos in library"
                ],
                serviceFeatures: [
                    "1 x feedback round",
                    "3 working days delivery (after day of shooting)"
                ],
                price: "350"
            },
            {
                name: "Pro Momentum Tier",
                perfectFor: "A fuller narrative and a month of social fuel without the agency overhead",
                strategy: ["1 x pre-shoot content strategy meeting"],
                production: ["1 × full-day shoot (≈ 6 h, one location)"],
                deliverables: [
                    "1 x flagship brand film ≈ 1-2 minutes long",
                    "5 x 15-30 seconds social media vertical reels",
                    "35 x fully edited photos in library"
                ],
                serviceFeatures: [
                    "1 x feedback round",
                    "5 working days delivery (after day of shooting)"
                ],
                price: "500"
            },
            {
                name: "Premium Signature Tier",
                perfectFor: "Seasonal campaigns, new collections, and brands that want to tell their story over multiple episodes",
                strategy: ["2 x pre-shoot content strategy meeting"],
                production: ["2 × full-day shoot (≈ 5 h each, multi-location)"],
                deliverables: [
                    "2 x flagship brand film ≈ 2+ minutes long",
                    "7 x 15-30 seconds social media vertical reels",
                    "40 x fully edited photos in library"
                ],
                serviceFeatures: [
                    "2 x feedback rounds",
                    "7 working days delivery (after day of shooting)"
                ],
                price: "650"
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
        priceFrom: "380",
        pageTitle: "Lifestyle & Event Showcase: Capturing Authentic Moments",
        pageDescription: "Showcase the vibrant lifestyle your brand embodies or the unforgettable atmosphere of your events. We craft compelling visual narratives that connect with your audience on an emotional level.",
        tiers: [
            {
                name: "Essential Lifestyle Package",
                perfectFor: "Small brands or events needing a concise, impactful showcase.",
                production: ["1 x half-day shoot (≈ 4h, one location)"],
                deliverables: ["1 x highlight video (1-2 minutes)", "2 x social media clips (15-30s)", "15 x edited photos"],
                serviceFeatures: ["1 feedback round", "5 working days delivery"],
                price: "350"
            },
            {
                name: "Comprehensive Event Coverage",
                perfectFor: "Larger events or campaigns needing extensive footage.",
                production: ["1 x full-day shoot (≈ 8h, multi-angle)"],
                deliverables: ["1 x main event film (3-5 minutes)", "5 x social media reels", "50 x edited photos"],
                serviceFeatures: ["2 feedback rounds", "7 working days delivery"],
                price: "600"
            }
        ]
    },
    {
        title: "Social‑Media Burst",
        slug: "social-media-burst", // Manually defined slug
        video: "",
        shortDesc:
            "High‑energy snack‑size clips optimised for TikTok, Reels and Shorts. \
       Vertical from capture to delivery, complete with trending‑sound clearance.",
        priceFrom: "380",
        pageTitle: "Social Media Burst: Go Viral",
        pageDescription: "Energize your social media presence with a burst of short, dynamic video content. Perfectly optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts, these clips are designed for maximum engagement and reach.",
        tiers: [
            {
                name: "Starter Social Pack",
                perfectFor: "Quick content boost for social channels.",
                deliverables: ["5 x vertical short videos (15-60s)", "Trending sound research"],
                serviceFeatures: ["Fast turnaround (3 days)"],
                price: "300"
            },
            {
                name: "Monthly Social Retainer",
                perfectFor: "Consistent, high-quality social content.",
                deliverables: ["10 x vertical short videos per month", "Content calendar planning", "Performance analytics"],
                serviceFeatures: ["Priority support", "2 feedback rounds per batch"],
                price: "550"
            }
        ]
    },
    {
        title: "Business / Testimonial",
        slug: "business-testimonial", // Manually defined slug
        video: "",
        shortDesc:
            "Polished sit‑down interviews with multi‑cam angles, pro audio and subtle \
       animated lower‑thirds. Let your best advocates do the talking.",
        priceFrom: null,
        pageTitle: "Business Profiles & Testimonials: Build Trust",
        pageDescription: "Let your success stories and satisfied clients speak for you. We produce professional interviews and testimonials that build credibility and showcase the value you provide, complete with multi-camera setups, high-quality audio, and tasteful graphics.",
        tiers: [
            {
                name: "Single Testimonial Video",
                perfectFor: "Highlighting a key client success story.",
                production: ["1 x half-day shoot for interview + B-roll"],
                deliverables: ["1 x testimonial video (2-3 minutes)", "Animated lower-thirds"],
                serviceFeatures: ["1 feedback round", "7 working days delivery"],
                price: "450"
            },
            {
                name: "Company Profile Package",
                perfectFor: "Comprehensive business overview with multiple voices.",
                production: ["1 x full-day shoot, multiple interviews + location shots"],
                deliverables: ["1 x company story video (3-5 minutes)", "3 x short testimonial clips"],
                serviceFeatures: ["2 feedback rounds", "10 working days delivery"],
                price: "800"
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