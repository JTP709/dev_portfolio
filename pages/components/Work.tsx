import {
    Heading,
    Box,
    Grid,
    GridItem,
    Button,
    Flex,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Tag,
  } from '@chakra-ui/react'
import Image from 'next/image';
import useThemeColors from '../hooks/useThemeColors';
import krogerSearchImage from '../../public/projects/kroger_search.png';
import krogerProductImage from '../../public/projects/kroger_product.png';
import goIlawnImage from '../../public/projects/goilawn.png';
import quoteFlowImage from '../../public/projects/quote_flow.png';
import dashboardImage from '../../public/projects/dashboard.png';
import billingCenterImage from '../../public/projects/billing_center.png';
import Link from 'next/link';
import { useState } from 'react';


const projects = [
    {
        name: 'Kroger.com Search Experience',
        href: 'https://www.kroger.com/search?query=milk',
        image_src: krogerSearchImage,
        tech: ['JavaScript', 'React', 'Redux', 'Java', 'Kotlin'],
    },
    {
        name: 'Kroger.com Product Pages',
        href: 'https://www.kroger.com/p/kroger-1-low-fat-chocolate-milk-jug/0001111050573',
        image_src: krogerProductImage,
        tech: ['JavaScript', 'React', 'Redux', 'Java', 'Kotlin'],
    },
    {
        name: 'GIS goIlawn',
        href: 'https://goilawn.com/',
        image_src: goIlawnImage,
        tech: ['JavaScript', 'React', 'Redux', 'Ruby', 'Ruby on Rails'],
    },
    {
        name: 'Quote Flow',
        href: 'https://quote-sandbox.coterieinsurance.com',
        image_src: quoteFlowImage,
        tech: ['TypeScript', 'React', 'Redux'],
    },
    {
        name: 'Dashboard',
        image_src: dashboardImage,
        tech: ['TypeScript', 'React', 'Redux'],
    },
    {
        name: 'Billing Center',
        image_src: billingCenterImage,
        tech: ['TypeScript', 'React', 'Next.js'],
    },
];

const Work = () => {
    const { primary, secondary, btnHover } = useThemeColors();
    const [isOpen, setIsOpen] = useState<null |string>(null);
    const onClose = () => setIsOpen(null);

    return (
        <Box id='work' data-testid='work' as='section' minHeight='100vh' padding='32px'>
            <Heading as='h2' size='2xl' margin='24px 0'>Work</Heading>
            <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
            <Heading as='h3' fontSize='1.5em' marginTop='24px'>Below are some production web apps and projects I&apos;ve worked on.</Heading>
            <Grid margin='8em 0' templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={16}>
                {
                    projects.map(project => (
                        <GridItem
                            key={ project.name }
                            w='100%'
                            // h='300px'
                            bgColor={secondary}
                            color='black'
                            borderRadius='4px'
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
                                        <Flex justifyContent='center' alignItems='center' padding='24px 0 16px'>
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
                                            ? <Link href={ project.href }>
                                                <Button color='white' as='a' bgColor={primary} _hover={{ bg: btnHover, cursor: 'pointer' }}>Website</Button>
                                            </Link>
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
        </Box>
    );
};

export default Work;
