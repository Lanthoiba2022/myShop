export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Popular picks",
                href: "#",
                imageSrc: "/images/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/images/nav/ui-kits/blue.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/images/nav/ui-kits/purple.jpg"
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Popular Icon picks",
                href: "#",
                imageSrc: "/images/nav/icons/picks.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/images/nav/icons/new.jpg"
            },
            {
                name: "Bestsellers Icons",
                href: "#",
                imageSrc: "/images/nav/icons/bestsellers.jpg"
            },
        ],
    },
]