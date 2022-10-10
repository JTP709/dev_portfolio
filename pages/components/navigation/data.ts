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
            subLabel: 'Small business insurance start-up',
            href: 'coterie_insurance',
        },
        {
            label: 'Launch Scout',
            subLabel: 'Custom software consultancy',
            href: 'launch_scout',
        },
        ],
    },
    {
        label: 'Skills',
        href: 'skills'
    },
    {
        label: 'Projects',
        href: 'projects',
    },
    {
        label: 'Connect',
        href: 'connect',
    },
];
