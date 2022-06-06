import {
    ListItem,
    UnorderedList,
    Heading,
    Box,
  } from '@chakra-ui/react'

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
    return (
        <Box data-testid='contact' as='section'>
            <Heading as='h2' size='2xl'>Contact and Social</Heading>
            <UnorderedList>
                {
                    contact_list.map(contact => (
                        <ListItem key={ contact.type }>
                            <a href={ contact.href }>{ contact.type }</a>
                        </ListItem>
                    ))
                }
            </UnorderedList>
        </Box>
    );
};

export default Contact;
