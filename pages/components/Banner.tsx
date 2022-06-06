import { Flex, Heading } from "@chakra-ui/react";

const Banner = () => {
    return (
        <Flex
            data-testid='banner'
            as='section'
            minHeight='100vh'
            alignItems="center"
            justifyContent="center"
        >
            <Heading as='h1' size='4xl'>Jon Prell</Heading>
        </Flex>
    );
};

export default Banner;
