import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { Collapse, Flex, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ConditionalScrollLink from "./ConditionalScrollLink";

import { NavItem } from "./types/interfaces";

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <ConditionalScrollLink to={Boolean(children) ? undefined : href}>
                <Flex
                    py={2}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{ textDecoration: 'none' }}
                >
                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}
                        as='button'
                    >
                        {label}
                    </Text>
                        {children && (
                            <Icon
                                as={ChevronDownIcon}
                                transition={'all .25s ease-in-out'}
                                transform={isOpen ? 'rotate(180deg)' : ''}
                                w={6}
                                h={6}
                            />
                        )}
                </Flex>
            </ConditionalScrollLink>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}
                >
                    {children &&
                        children.map((child) => (
                            <ScrollLink
                                key={child.label} 
                                activeClass="active"
                                to={child.href ?? '#'}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Text py={2} as='button'>
                                    {child.label}
                                </Text>
                            </ScrollLink>
                        )
                    )}
                </Stack>
            </Collapse>
        </Stack>
    );
};

export default MobileNavItem;