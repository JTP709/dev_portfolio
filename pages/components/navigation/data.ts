import { NavItem } from "./types/interfaces";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: 'banner'
    },
    {
        label: 'About Me',
        href: 'about',
    },
    {
        label: 'Experience',
        children: [
        {
            label: 'Coterie Insurance',
            subLabel: 'Find your dream design job',
            href: 'coterie_insurance',
        },
        {
            label: 'Launch Scout',
            subLabel: 'An exclusive list for contract work',
            href: 'launch_scout',
        },
        ],
    },
    {
        label: 'Skills',
        href: 'skills'
    },
    {
        label: 'Connect',
        href: 'contact',
    },
];
