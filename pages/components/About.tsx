import { Heading, Text } from "@chakra-ui/react";

const About = () => {
    return (
        <section data-testid='about'>
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
        </section>
    )
};

export default About;
