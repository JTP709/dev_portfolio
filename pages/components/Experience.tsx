import {
    ListItem,
    UnorderedList,
    Heading,
    Text,
  } from '@chakra-ui/react'

type ExpProjects = {
    name: string;
    description: string;
    url?: {
        href: string;
        link: string;
    };
};

type ExpList = {
    employer: string;
    date_from: string;
    date_to: string;
    description: string;
    projects: ExpProjects[];
};

export const experience_list: ExpList[] = [
    {
        employer: 'Coterie Insurance',
        date_from: '2020-12',
        date_to: 'Present',
        description: 'Tech lead and senior engineer for the front-end horizontal.',
        projects: [
            {
                name: 'Quote Flow White Labelling',
                description: 'Complete refactor of the theming structure for Quote Flow, Coterie Insurance’s Direct to Business insurance sales application, to allow business partner’s to sell Coterie’s insurance on their websites with their branding experience.',
            },
            {
                name: 'Shared Component Library',
                description: 'Consolidating our various UI components across all of our front-end applications into a single shared library that conforms to our style guide. Mono-repo that also includes a Storybook application  to provide designers and developers a component sandbox environment.',
            },
            {
                name: 'Billing Center',
                description: 'Built using the Next.js to leverage server and static rendering for faster page load times, SEO, and to implement an API layer that is tailored to the client application. Leveraged Docker and Kubernetes to unlock a “build-once, deploy everywhere” devops pattern.',
            },
            {
                name: 'Hackathon PWA Location Quoting App',
                description: 'Progressive Web App built to leverage Coterie’s insurance quoting engine with location APIs in a mobile first experience. Created during a 3 day company Hackathon event with over a dozen self organizing teams across the engineering organization. Our team took home the gold and was voted the winner of Hackathon 2022.',
            },
        ],
    },
    {
        employer: 'Launch Scout',
        date_from: '2018-2',
        date_to: '2020-12',
        description: 'Engineer consultant for a variety of clients, inlcuding Kroger.com, GIS Dynamics, and Coterie Insurance',
        projects: [
            {
                name: 'Kroger.com Seach and Product Experiences',
                description: 'Responsible for the product and search experience products for Kroger and Kroger banners, the tech lead for GIS Dynamics Go iLawn product, and product enhancement for Coterie’s Quote Flow application. Led efforts to improve page performance, port legacy apps to modern SPA platforms, ensure a11y compliance, and iterate on data analytics. Served in a 24/7 on-call production support rotation to address critical bugs and emergencies that would directly affect the user experience.',
                url: {
                    href: 'https://www.kroger.com',
                    link: 'Kroger.com'
                },
            },
            {
                name: 'Go iLawn application development',
                description: 'Maintenance and new feature development for a Ruby on Rails and React web application for lawncare professionals that leveraged mapping APIs that allows users to quickly generate an accurate landscaping estimate.',
                url: {
                    href: 'https://goilawn.com/',
                    link: 'goilawn.com'
                },
            },
            {
                name: 'Quote Flow product enhancement',
                description: 'Application overhaul to turn a list of "nice-to-haves" into features ahead of a major partner integration.',
                url: {
                    href: 'https://quote.coterieinsurance.com/',
                    link: 'Quote Flow'
                },
            }
        ],
    },
];

const Experience = () => {
    return (
        <section data-testid='experience'>
            <Heading as='h2'>Experience</Heading>
            <div>
                {
                    experience_list.map(experience => (
                        <div data-testid={ `${experience.employer}-exp` } key={ experience.employer }>
                            <Heading as='h3'>{ experience.employer }</Heading>
                            <time dateTime={ experience.date_from }>{ experience.date_from }</time>
                            {' to '}
                            <time dateTime={ experience.date_to === 'Present' ? Date.now().toString() : experience.date_to }>{ experience.date_to }</time>
                            <Text>{ experience.description }</Text>
                            <UnorderedList>
                                { experience.projects.map(project => (
                                    <ListItem data-testid={ `${project.name}-proj` } key={ project.name }>
                                        <Heading as='h4'>{ project.name }</Heading>
                                        <Text>{ project.description }</Text>
                                        { project.url && <a href={ project.url.href }>{ project.url.link }</a>}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Experience;
