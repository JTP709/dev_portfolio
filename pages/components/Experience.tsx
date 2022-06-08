import {
    ListItem,
    UnorderedList,
    Heading,
    Text,
    Box,
    Accordion,
    AccordionItem,
    Button,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Flex,
  } from '@chakra-ui/react'
import React from 'react';

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
    id: string;
    date_from: string;
    date_to: string;
    description: JSX.Element[];
    projects: ExpProjects[];
};

export const experience_list: ExpList[] = [
    {
        employer: 'Coterie Insurance',
        id:'coterie_insurance',
        date_from: '2020-12',
        date_to: 'Present',
        description: [
            <Text key='a'>Tech Lead for the front-end horizontal on the Payment’s scrum team.</Text>,
            <Text key='b'>Responsible for setting the technical direction for the Quote Flow and Billing Center products, determining priority of technical debt, and improving logging for error reduction efforts.</Text>,
            <Text key='c'>Collaborate  with Product Management, UI/UX Designers, back-end engineers, SDETs, and DevOps in an agile environment to deliver new features and improve upon our existing experiences.</Text>,
            <Text key='d'>Serving as a Core Coach for junior and mid-level engineers to support their professional development through one-on-one sessions and pair programming.</Text>,
            <Text key='e'>Partner with the API Staff Engineering to design the front-end architecture so as to deliver on immediate and future product goals.</Text>,
        ],
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
        id:'launch_scout',
        date_from: '2018-2',
        date_to: '2020-12',
        description: [
            <Text key='a'>Worked as a consultant and contractor for over 2 years on an agile software team in the Customer Experience Web space for Kroger Digital, as a consultant for GIS Dynamics for 3 months, and staff augmentation for Coterie Insurance for 2 months.</Text>,
            <Text key='b'>Responsible for the product and search experience products for Kroger and Kroger banners, the tech lead for GIS Dynamics Go iLawn product, and product enhancement for Coterie’s Quote Flow application.</Text>,
            <Text key='c'>Led efforts to improve page performance, port legacy apps to modern SPA platforms, ensure a11y compliance, and iterate on data analytics.</Text>,
            <Text key='d'>Served in a 24/7 on-call production support rotation to address critical bugs and emergencies that would directly affect the user experience.</Text>,
            <Text key='e'>Served as a Career Development Manager for the development team, mentoring peer developers with career guidance and professional growth.</Text>,
        ],
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
        <Flex data-testid='experience' as='section' minHeight='100vh' flexDirection='column'>
            <Heading as='h2' size='2xl' flex='0 1 auto'>Experience</Heading>
            <Accordion allowToggle flex='1 1 auto' display='flex' flexDirection='column' justifyContent='space-around'>
                {
                    experience_list.map(experience => (
                        <Flex
                            data-testid={ `${experience.employer}-exp` }
                            id={ experience.id }
                            key={ experience.employer }
                            flex='1 1 auto'
                        >
                            <AccordionItem>
                                <Heading as='h3' size='xl'>{ experience.employer }</Heading>
                                <time dateTime={ experience.date_from }>{ experience.date_from }</time>
                                {' to '}
                                <time dateTime={ experience.date_to === 'Present' ? Date.now().toString() : experience.date_to }>{ experience.date_to }</time>
                                { experience.description }
                                <AccordionButton>
                                    See Projects
                                    <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel>
                                    <UnorderedList>
                                        { experience.projects.map(project => (
                                            <ListItem data-testid={ `${project.name}-proj` } key={ project.name }>
                                                <Heading as='h4' size='md'>{ project.name }</Heading>
                                                <Text>{ project.description }</Text>
                                                { project.url && <a href={ project.url.href }>{ project.url.link }</a>}
                                            </ListItem>
                                        ))}
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Flex>
                    ))
                }
            </Accordion>
        </Flex>
    );
};

export default Experience;
