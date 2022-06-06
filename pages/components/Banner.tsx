import { Box, Heading } from "@chakra-ui/react";

const Banner = () => {
    return (
        <Box data-testid='banner' as='section'>
            <Heading as='h1' size='4xl'>Jon Prell</Heading>
        </Box>
    );
};

export default Banner;
