import { Box, Container, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import useThemeColors from "../hooks/useThemeColors";

const About = () => {
    const { primary, gradient } = useThemeColors();

    return (
        <Flex
            id='about'
            data-testid='about'
            as='section'
            minHeight='100vh'
            direction={['column', 'row']}
            bgGradient={gradient}
            justifyContent='flex-start'
        >
            <Box maxWidth='1200px' height='100%' margin='auto'>
                <Box
                    width={[null, '60%']}
                    margin={['32px', '0']}
                    padding='32px 32px 56px'
                    bgColor={useColorModeValue('white', 'gray.800')}
                    borderRadius='6px'
                >
                    <Heading as='h2' size='2xl' margin='24px 0'>About Me</Heading>
                    <Box as='hr' width='64px' border={`4px solid`} borderRadius='12px' borderColor={primary} />
                    <Text margin='32px 0'>
                        Hello, there! I&apos;m Jon Prell, a senior software engineer with <a href='https//www.coterieinsurance.com'>Coterie Insurance</a>.{' '}
                        I have full-stack experience, though have been mostly focused on front-end development building React applications of all sizes.{' '}
                        I have written production quality code for early stage start-ups on up to Fortune 500 companies.
                    </Text>
                    <Text>
                        When I&apos;m not writing code, I like to spend my time with my wonderful partner Leandra, our dog Charlie, and our demon kitty Leo.{' '}
                        After growing up in the Kentucky, we took advantage of remote work and relocated to Denver, Colorado.{' '}
                        We love to spend our week nights playing video games or watching movies, and our weekends hiking, camping, or off-roading in the Colorado mountians.
                    </Text>
                </Box>
            </Box>
        </Flex>
    )
};

export default About;
