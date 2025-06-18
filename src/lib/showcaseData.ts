/* A typed data file – extend freely in the future */

export interface ShowcaseItem {
    labelKey: string;
    videoId: string;
    descriptionKey: string;
    pointsKeys: string[];
    images: readonly string[];
    comingSoon?: boolean;
}

export interface ShowcaseCategory {
    titleKey: string;
    items: ShowcaseItem[];
}

export const showcaseData: ShowcaseCategory[] = [
    {
        titleKey: 'showcase.brandStories.title',
        items: [
            {
                labelKey: 'showcase.brandStories.webDesign.label',
                videoId: 'LxFu2WuuxxI',
                descriptionKey: 'showcase.brandStories.webDesign.desc',
                pointsKeys: [
                    'showcase.brandStories.webDesign.p1',
                    'showcase.brandStories.webDesign.p2',
                    'showcase.brandStories.webDesign.p3',
                ],
                images: [
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.12.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.14.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.15.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.16.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.17.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-18%20102201_1.2.1.png',
                ],
            },
        ],
    },

    {
        titleKey: 'showcase.lifestyle.title',
        items: [
            {
                labelKey: 'showcase.lifestyle.bbq.label',
                videoId: 'y_oWn83xevQ',
                descriptionKey: 'showcase.lifestyle.bbq.desc',
                pointsKeys: [
                    'showcase.lifestyle.bbq.p1',
                    'showcase.lifestyle.bbq.p2',
                    'showcase.lifestyle.bbq.p3',
                    'showcase.lifestyle.bbq.p4',
                ],
                images: [
                    'https://images.winglamproductions.com/Still%202025-06-01%20211230_1.5.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-01%20211230_1.8.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-01%20211230_1.1.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-01%20211230_1.3.1.png',
                    'https://images.winglamproductions.com/Still%202025-06-01%20212612_1.2.1.png'],
            },
        ],
    },

    {
        titleKey: 'showcase.socialMedia.title',
        items: [
            {
                labelKey: 'showcase.comingSoon',
                videoId: '',
                descriptionKey: 'showcase.socialMedia.comingSoon.desc',
                pointsKeys: [
                    'showcase.socialMedia.comingSoon.p1',
                    'showcase.socialMedia.comingSoon.p2',
                    'showcase.socialMedia.comingSoon.p3',
                ],
                images: [],
                comingSoon: true,
            },
        ],
    },

    {
        titleKey: 'showcase.weddings.title',
        items: [
            {
                labelKey: 'showcase.comingSoon',
                videoId: '',
                descriptionKey: 'showcase.weddings.comingSoon.desc',
                pointsKeys: [
                    'showcase.weddings.comingSoon.p1',
                    'showcase.weddings.comingSoon.p2',
                    'showcase.weddings.comingSoon.p3',
                    'showcase.weddings.comingSoon.p4',
                ],
                images: [],
                comingSoon: true,
            },
        ],
    },
];
