import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import ConditionalScrollLink from "./ConditionalScrollLink";
import { NAV_ITEMS } from "./data";
import DesktopSubNav from "./DesktopSubNav";

export default function DesktopNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => {
                return (
                    <Box key={navItem.label}>
                        <Popover trigger={'click'} placement={'bottom-start'}>
                            <ConditionalScrollLink to={ navItem.href } >
                                <PopoverTrigger>
                                    <Text
                                        p={2}
                                        as={'button'}
                                        fontSize={'sm'}
                                        fontWeight={500}
                                        color={linkColor}
                                        cursor='pointer'
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}
                                    >
                                        {navItem.label}
                                    </Text>
                                 </PopoverTrigger>
                            </ConditionalScrollLink>
                            {navItem.children && (
                                <PopoverContent
                                    border={0}
                                    boxShadow={'xl'}
                                    bg={popoverContentBgColor}
                                    p={4}
                                    rounded={'xl'}
                                    minW={'sm'}
                                >
                                    <Stack>
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}
                                    </Stack>
                                </PopoverContent>
                            )}
                        </Popover>
                    </Box>
                )}
            )}
        </Stack>
    );
};