import { Flex, Heading } from "@chakra-ui/react";

const Banner = () => {
    return (
        <Flex
            data-testid='banner'
            id='banner'
            as='section'
            minHeight='100vh'
            alignItems="center"
            justifyContent="center"
            // position='relative'
        >
            <Heading
                as='h1'
                size='4xl'
                // position='absolute'
                // top='50%'
                // left='50%'
                // transform='translate(-50%, -50%)'
                // bgColor='gray.800'
                // padding='16px 64px'
                // borderRadius='8px'
                // textAlign='center'
            >
                Jon Prell
            </Heading>
        </Flex>
    );
};

export default Banner;
