import {
    Heading,
    Box,
    Flex,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
import useThemeColor, { THEME_KEYS } from '../hooks/useThemeColor';


export const contact_types = {
    LINKEDIN: 'LinkedIn',
    GITHUB: 'Github',
    TWITTER: 'Twitter',
};

export const contact_list = [
    {
        type: contact_types.LINKEDIN,
        href: 'https://www.linkedin.com/in/jon-prell-web-dev/',
    },
    {
        type: contact_types.GITHUB,
        href: 'https://github.com/JTP709/',
    },
    {
        type: contact_types.TWITTER,
        href: 'https://twitter.com/JTP709',
    },
];

const Contact = () => {
    const themeColor = useThemeColor(THEME_KEYS.COLOR);

    return (
        <Box id='contact' data-testid='contact' as='section' minHeight='100vh' padding='32px'>
            <Heading as='h2' size='2xl' margin='24px 0'>Connect</Heading>
            <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={themeColor} />
            <Grid margin='16em 0' templateColumns='repeat(3, 1fr)' gap={16}>
                {
                    contact_list.map(contact => (
                        <GridItem
                            key={ contact.type }
                            w='100%'
                            h='300px'
                            bgColor={themeColor}
                            borderRadius='4px'
                        >
                            <a href={ contact.href }>{ contact.type }</a>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Contact;
