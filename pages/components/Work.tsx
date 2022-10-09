import {
    Heading,
    Box,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
import useThemeColors from '../hooks/useThemeColors';

const projects = [
    {
        name: 'Kroger.com Search Experience',
        href: 'https://www.kroger.com',
    },
    {
        name: 'Kroger.com Product Pages',
        href: 'https://www.kroger.com',
    },
    {
        name: 'GIS goIlawn',
        href: 'https://www.goilawn.com',
    },
    {
        name: 'Quote Flow',
        href: 'https://quote.coterieinsurance.com',
    },
    {
        name: 'Dashboard',
        href: 'https://dashboard.coterieinsurance.com',
    },
    {
        name: 'Billing Center',
        href: 'https://billingcenter.coterieinsurance.com',
    },
];

const Work = () => {
    const { primary, secondary } = useThemeColors();

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
                            h='300px'
                            bgColor={secondary}
                            color='black'
                            borderRadius='4px'
                        >
                            <a href={ project.href }>{ project.name }</a>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Work;
