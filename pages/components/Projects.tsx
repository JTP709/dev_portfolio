import {
    Heading,
    Box,
    Grid,
    GridItem,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Tag,
    Text,
    Container,
  } from '@chakra-ui/react'
import Image from 'next/image';
import useThemeColors from '../hooks/useThemeColors';
import krogerSearchImage from '../../public/projects/kroger_search.png';
import krogerProductImage from '../../public/projects/kroger_product.png';
import goIlawnImage from '../../public/projects/goilawn.png';
import quoteFlowImage from '../../public/projects/quote_flow.png';
import dashboardImage from '../../public/projects/dashboard.png';
import billingCenterImage from '../../public/projects/billing_center.png';
import { useState } from 'react';


const projects = [
    {
        name: 'Kroger.com Search Experience',
        href: 'https://www.kroger.com/search?query=milk',
        image_src: krogerSearchImage,
        description: 'Core product search experience on Kroger.com and Kroger Banner sites (e.g. Ralphs, King Soopers). Our team managed both the front-end experience in React, and a back-end for front-end (BFF) application written in Java/Kotlin to manage multiple service API requests (search, product details, monetization, etc).',
        tech: ['JavaScript', 'React', 'Redux', 'Java', 'Kotlin'],
    },
    {
        name: 'Kroger.com Product Pages',
        href: 'https://www.kroger.com/p/kroger-1-low-fat-chocolate-milk-jug/0001111050573',
        image_src: krogerProductImage,
        description: 'Core product page experience on Kroger.com and Kroger Banner sites (e.g. Ralphs, King Soopers). Our team managed both the front-end experience in React, and a back-end for front-end (BFF) application written in Java/Kotlin to manage multiple service API requests (product details, store stock, pricing, etc).',
        tech: ['JavaScript', 'React', 'Redux', 'Java', 'Kotlin'],
    },
    {
        name: 'GIS go iLawn',
        href: 'https://goilawn.com/',
        image_src: goIlawnImage,
        description: 'Property Measurement Solutions for Landscape, Paving and Snow Removal Contractors. Leverages advanced mapping APIs and geographical mapping tools to allow lawn care small business owners the power to quickly and accurately measure and quote a new property.',
        tech: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
    },
    {
        name: 'Coterie Quote Flow',
        href: 'https://quote-sandbox.coterieinsurance.com',
        image_src: quoteFlowImage,
        description: 'Coterie\'s Direct to Business web application that allows a small business owner the power to get a quote and bind within minutes - the only such commercial insurance app in the world. Originally written in JavaScript and with little test coverage, my team and I have refactored the application to TypeScript, improved test coverage to over 85%, and leveraged newer practices and patterns such as React Query and Functional Components.',
        tech: ['TypeScript', 'React', 'Redux'],
    },
    {
        name: 'Coterie IA Dashboard',
        image_src: dashboardImage,
        description: 'Coterie\'s Independant Agent Dashboard application allows independent insurance agents the power to quote, sell, and service insurance policies. Similar to my experience on the Quote Flow product, our team has over time refactored to TypeScript and improved unit test coverage.',
        tech: ['TypeScript', 'React', 'Redux'],
    },
    {
        name: 'Coterie Billing Center',
        image_src: billingCenterImage,
        description: 'Coterie\'s latest web application, Billing Center is the first iteration of a self service portal that allows policy holders the ability to service their policies beginning with updating payment information. Our team took advantage of this opportunity to leverage Next.js to deliver a first class user experience.',
        tech: ['TypeScript', 'React', 'Next.js'],
    },
];

const Work = () => {
    const { primary, secondary, btnHover } = useThemeColors();
    const [isOpen, setIsOpen] = useState<null |string>(null);
    const onClose = () => setIsOpen(null);

    return (
        <Box id='projects' data-testid='projects' as='section' minHeight='100vh' padding='32px'>
            <Container maxWidth='1200px'>
                <Heading as='h2' size='2xl' margin='24px 0'>Projects</Heading>
                <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
                <Heading as='h3' fontSize='1.5em' marginTop='24px'>Below are some production web apps and projects I&apos;ve worked on.</Heading>
                <Grid margin='8em 0' templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={16}>
                    {
                        projects.map(project => (
                            <GridItem
                                key={ project.name }
                                w='100%'
                                bgColor={secondary}
                                color='black'
                                borderRadius='4px'
                                border='1px solid'
                                borderColor='gray.400'
                            >
                                <Image src={project.image_src} alt={project.name} />
                                <Box padding='12px 16px' display='inline-block' width='100%'>
                                    <Heading as='h4' fontSize='1.2em'>{project.name}</Heading>
                                    <Box as='hr' width='64px' border={`2px solid`} borderRadius='12px' borderColor={primary} marginTop='16px' />
                                    <Flex justifyContent='center' alignItems='center' padding='24px 0 16px'>
                                        <Button
                                            color='white'
                                            bgColor={primary}
                                            _hover={{ bg: btnHover, cursor: 'pointer' }}
                                            onClick={() => setIsOpen(project.name)}
                                        >Learn More</Button>
                                    </Flex>
                                    <Modal isOpen={isOpen === project.name} onClose={onClose} isCentered motionPreset='scale' size='xl'>
                                        <ModalOverlay />
                                        <ModalContent>
                                        <ModalHeader>{ project.name }</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Image src={project.image_src} alt={project.name} />
                                            <Heading as='h4' fontSize='1.2em' marginTop='32px'>{project.name}</Heading>
                                            <Box as='hr' width='64px' border={`2px solid`} borderRadius='12px' borderColor={primary} marginTop='16px' />
                                            <Text margin='32px 0'>{ project.description }</Text>
                                            <Flex padding='24px 0 16px'>
                                                {
                                                    project.tech.map(tag => (
                                                        <Tag
                                                            key={ tag }
                                                            size='lg'
                                                            bgColor={ secondary }
                                                            color='black'
                                                            variant='solid'
                                                            margin='0 4px 4px 0'
                                                        >{ tag }</Tag>
                                                    ))
                                                }
                                            </Flex>
                                        </ModalBody>
                                        <ModalFooter display='flex' justifyContent='center' paddingBottom='32px'>
                                            {
                                                project.href 
                                                ? <Button
                                                        as='a'
                                                        href={ project.href }
                                                        target='_blank'
                                                        color='white'
                                                        bgColor={primary}
                                                        _hover={{ bg: btnHover, cursor: 'pointer' }}
                                                    >
                                                        Website
                                                    </Button>
                                                : <Button color='white' disabled bgColor={primary} _hover={{ bg: btnHover, cursor: 'pointer' }}>Not Public</Button>
                                            }
                                        </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Work;
