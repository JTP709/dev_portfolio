import { NavItem } from "./types/interfaces";

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '#'
    },
    {
        label: 'About Me',
        href: '#'
    },
    {
        label: 'Skills',
        href: '#'
    },
    {
        label: 'Experience',
        children: [
        {
            label: 'Coterie Insurance',
            subLabel: 'Find your dream design job',
            href: '#',
        },
        {
            label: 'Launch Scout',
            subLabel: 'An exclusive list for contract work',
            href: '#',
        },
        ],
    },
    {
        label: 'Contact & Social',
        href: '#',
    },
];
