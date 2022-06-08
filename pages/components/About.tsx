import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <Flex id='about' data-testid='about' as='section' minHeight='100vh' direction={['column', 'row']}>
            <Box height='20vh' bgGradient='linear(to-r, green.200, pink.500)' display={['block', 'none']}>
            </Box>
            <Box width={['100vw', '50vw']}>
                <Heading as='h2' size='2xl'>About Me</Heading>
                <Text>
                    Hello, there! I&apos;m Jon Prell, a senior software engineer with <a href='https//www.coterieinsurance.com'>Coterie Insurance</a>.{' '}
                    I have full-stack experience, though have been mostly focused on front-end development building React applications of all sizes{' '}
                    From early stage start-ups to Fortune 500 companies, I have written production quality code for all shapes and sizes.
                </Text>
                <Text>
                    When I&apos;m not writing code, I like to spend my time with my wonderful partner Leandra, our dog Charlie, and our demon kitty Leo.{' '}
                    After growing up in the Kentucky, we took advantage of remote work and relocated to Denver, Colorado.{' '}
                    We love to spend our week nights playing video games or watching movies, and our weekends hiking, camping, or off-roading in the Colorado mountians.
                </Text>
            </Box>
            <Box width='50vw' bgGradient='linear(to-r, green.200, pink.500)' display={['none', 'block']}>

            </Box>
        </Flex>
    )
};

export default About;
