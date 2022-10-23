import { Button, Flex, Heading } from "@chakra-ui/react";
import useThemeColors from "../hooks/useThemeColors";
import { connect_list } from "./Connect";

const Banner = () => {
    const { iconColor, btnHover } = useThemeColors();

    return (
        <Flex
            data-testid='banner'
            id='banner'
            as='section'
            minHeight='100vh'
            alignItems="center"
            justifyContent="center"
            flexDir='column'
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
            <Flex flexDir='row'>
                {
                        connect_list.map(item => {
                        return (
                            <Button
                            key={item.type}
                            as='a'
                            href={item.href}
                            target="_blank"
                            bgColor={item.bgColor}
                            borderRadius='4px'
                            padding='4px'
                            margin='12px 4px'
                            height='32px'
                            width={'32px'}
                            _hover={{ bg: btnHover }}
                            >
                            { item.icon(iconColor, '24px') }
                            </Button>
                        )
                        })
                    }
            </Flex>
        </Flex>
    );
};

export default Banner;
