import { DownloadIcon } from '@chakra-ui/icons';
import {
    ListItem,
    Heading,
    Text,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Flex,
    List,
    Tag,
    Button,
    Divider,
    Container,
  } from '@chakra-ui/react'
import React from 'react';
import useThemeColors from '../hooks/useThemeColors';

type ExpProjects = {
    name: string;
    description: string;
    tech: string[];
    url?: {
        href: string;
        link: string;
    };
};

type ExpList = {
    employer: string;
    role: string;
    id: string;
    date_from: string;
    date_to: string;
    description: JSX.Element[];
    projects: ExpProjects[];
};

export const experience_list: ExpList[] = [
    {
        employer: 'Coterie Insurance',
        role: 'Senior Software Engineer',
        id:'coterie_insurance',
        date_from: '2020-12',
        date_to: 'Present',
        description: [
            <Text key='a' margin='0 0 12px'>Tech Lead for the front-end horizontal on the Payment’s scrum team.</Text>,
            <Text key='b' margin='12px 0'>Responsible for setting the technical direction for the Quote Flow and Billing Center products, determining priority of technical debt, and improving logging for error reduction efforts.</Text>,
            <Text key='c' margin='12px 0'>Collaborate  with Product Management, UI/UX Designers, back-end engineers, SDETs, and DevOps in an agile environment to deliver new features and improve upon our existing experiences.</Text>,
            <Text key='d' margin='12px 0'>Serving as a Core Coach for junior and mid-level engineers to support their professional development through one-on-one sessions and pair programming.</Text>,
            <Text key='e' margin='12px 0'>Partner with the API Staff Engineering to design the front-end architecture so as to deliver on immediate and future product goals.</Text>,
        ],
        projects: [
            {
                name: 'Quote Flow White Labelling',
                description: 'Complete refactor of the theming structure for Quote Flow, Coterie Insurance’s Direct to Business insurance sales application, to allow business partner’s to sell Coterie’s insurance on their websites with their branding experience.',
                tech: ['TypeScript', 'React', 'Redux', 'Cypress.io', 'Jest', 'react-testing-library'],
            },
            {
                name: 'Shared Component Library',
                description: 'Consolidating our various UI components across all of our front-end applications into a single shared library that conforms to our style guide. Mono-repo that also includes a Storybook application  to provide designers and developers a component sandbox environment.',
                tech: ['TypeScript', 'React', 'Storybook','Jest', 'react-testing-library'],
            },
            {
                name: 'Billing Center',
                description: 'Built using the Next.js to leverage server and static rendering for faster page load times, SEO, and to implement an API layer that is tailored to the client application. Leveraged Docker and Kubernetes to unlock a “build-once, deploy everywhere” devops pattern.',
                tech: ['TypeScript', 'React', 'Next.js', 'Cypress.io', 'Jest', 'react-testing-library'],
            },
            {
                name: 'Hackathon PWA Location Quoting App',
                description: 'Progressive Web App built to leverage Coterie’s insurance quoting engine with location APIs in a mobile first experience. Created during a 3 day company Hackathon event with over a dozen self organizing teams across the engineering organization. Our team took home the gold and was voted the winner of Hackathon 2022.',
                tech: ['TypeScript', 'React', 'PWA', 'Jest', 'react-testing-library'],
            },
        ],
    },
    {
        employer: 'Launch Scout',
        id:'launch_scout',
        role: 'Software Engineer',
        date_from: '2018-2',
        date_to: '2020-12',
        description: [
            <Text key='a' margin='0 0 12px'>Worked as a consultant and contractor for over 2 years on an agile software team in the Customer Experience Web space for Kroger Digital, as a consultant for GIS Dynamics for 3 months, and staff augmentation for Coterie Insurance for 2 months.</Text>,
            <Text key='b' margin='12px 0'>Responsible for the product and search experience products for Kroger and Kroger banners, the tech lead for GIS Dynamics Go iLawn product, and product enhancement for Coterie’s Quote Flow application.</Text>,
            <Text key='c' margin='12px 0'>Led efforts to improve page performance, port legacy apps to modern SPA platforms, ensure a11y compliance, and iterate on data analytics.</Text>,
            <Text key='d' margin='12px 0'>Served in a 24/7 on-call production support rotation to address critical bugs and emergencies that would directly affect the user experience.</Text>,
            <Text key='e' margin='12px 0'>Served as a Career Development Manager for the development team, mentoring peer developers with career guidance and professional growth.</Text>,
        ],
        projects: [
            {
                name: 'Kroger.com Seach and Product Experiences',
                description: 'Responsible for the product and search experience products for Kroger and Kroger banners, the tech lead for GIS Dynamics Go iLawn product, and product enhancement for Coterie’s Quote Flow application. Led efforts to improve page performance, port legacy apps to modern SPA platforms, ensure a11y compliance, and iterate on data analytics. Served in a 24/7 on-call production support rotation to address critical bugs and emergencies that would directly affect the user experience.',
                url: {
                    href: 'https://www.kroger.com',
                    link: 'Kroger.com'
                },
                tech: ['JavaScript', 'React', 'Redux', 'Jest', 'Enzyme', 'Java', 'Kotlin'],
            },
            {
                name: 'Go iLawn application development',
                description: 'Maintenance and new feature development for a Ruby on Rails and React web application for lawncare professionals that leveraged mapping APIs that allows users to quickly generate an accurate landscaping estimate.',
                url: {
                    href: 'https://goilawn.com/',
                    link: 'goilawn.com'
                },
                tech: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails', 'Jest', 'Enzyme'],
            },
            {
                name: 'Quote Flow product enhancement',
                description: 'Application overhaul to turn a list of "nice-to-haves" into features ahead of a major partner integration.',
                url: {
                    href: 'https://quote.coterieinsurance.com/',
                    link: 'Quote Flow'
                },
                tech: ['TypeScript', 'React', 'Redux', 'Cypress.io', 'Jest', 'react-testing-library'],
            }
        ],
    },
];

const Experience = () => {
    const { primary, secondary, btnHover } = useThemeColors();

    return (
        <Flex
            data-testid='experience'
            as='section'
            minHeight='100vh'
            flexDirection='column'
            padding='32px 32px 56px'
        >
            <Container maxWidth='1200px'>
                <Heading
                    as='h2'
                    size='2xl'
                    flex='0 1 auto'
                    margin='24px 0'
                >Experience</Heading>
                <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
                <Accordion allowToggle flex='1 1 auto' display='flex' flexDirection='column' justifyContent='space-around'>
                    {
                        experience_list.map(experience => (
                            <Flex
                                data-testid={ `${experience.employer}-exp` }
                                id={ experience.id }
                                key={ experience.employer }
                                flex='1 1 auto'
                            >
                                <AccordionItem border='none'>
                                    <Heading as='h3' size='xl' margin='32px 0 24px'>{ experience.employer }</Heading>
                                    <Heading as='h4' fontSize='1.5em'>{ experience.role }</Heading>
                                    <time dateTime={ experience.date_from }>{ experience.date_from }</time>
                                    {' to '}
                                    <time dateTime={ experience.date_to === 'Present' ? Date.now().toString() : experience.date_to }>{ experience.date_to }</time>
                                    <Box margin='32px 0 0'>
                                        { experience.description }
                                    </Box>
                                    <AccordionButton
                                        width='none'
                                        color='white'
                                        fontWeight='600'
                                        bgColor={primary}
                                        borderRadius='4px'
                                        marginTop='24px'
                                        _hover={{ bg: btnHover }}
                                    >
                                        See Projects
                                    <AccordionIcon/>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <List>
                                            { experience.projects.map(project => (
                                                <ListItem data-testid={ `${project.name}-proj` } key={ project.name } maxWidth={['100%', '60%']}>
                                                    <Heading as='h4' size='md' margin='12px 0'>{ project.name }</Heading>
                                                    <Text margin='12px'>{ project.description }</Text>
                                                    <Text margin='12px'>{ project.url && <a href={ project.url.href }>{ project.url.link }</a>}</Text>
                                                    <Box margin='12px'>
                                                        { project.tech.map(tech => {
                                                            return (
                                                                <Tag
                                                                    key={ tech }
                                                                    size='lg'
                                                                    bgColor={ secondary }
                                                                    color='black'
                                                                    variant='solid'
                                                                    margin='0 4px 4px 0'
                                                                >{ tech }</Tag>
                                                            )}
                                                        )}
                                                    </Box>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Flex>
                        ))
                    }
                </Accordion>
                <Divider marginTop='56px' />
                <Flex justifyContent='center' margin='56px 0 32px'>
                    <Button as='a' bgColor={primary} color='white' _hover={{ bg: btnHover }} href={'/Jon_Prell_Resume.pdf'} target="_blank">
                        <DownloadIcon h={6} w={6} paddingRight='8px' />
                        Download Resume
                    </Button>
                </Flex>
            </Container>
        </Flex>
    );
};

export default Experience;
