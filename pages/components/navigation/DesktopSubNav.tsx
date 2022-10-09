import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { NavItem } from "./types/interfaces";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useThemeColors from "../../hooks/useThemeColors";

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    const { navHover, } = useThemeColors();

    return (
        <ScrollLink
            activeClass="active"
            to={href || '#'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <Box
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
            >
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: navHover }}
                            fontWeight={500}
                            cursor='pointer'
                            as='button'
                        >
                            {label}
                        </Text>
                        <Text fontSize={'sm'}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}
                    >
                        <Icon color={navHover} w={5} h={5} as={ChevronRightIcon} />
                    </Flex>
                </Stack>
            </Box>
        </ScrollLink>
    );
};

export default DesktopSubNav;
