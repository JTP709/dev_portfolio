import { useColorModeValue } from "@chakra-ui/react";

const useThemeColors = () => {
  return {
    primary: useColorModeValue('pink.500', 'purple.500'),
    secondary: useColorModeValue('green.200', 'blue.200'),
    fontColor: useColorModeValue('black', 'white'),
    btnHover: useColorModeValue('pink.700', 'purple.700'),
    navHover: useColorModeValue('pink.500', 'blue.200'),
    linkColor: useColorModeValue('pink.500', 'blue.200'),
    hrColor: useColorModeValue('pink.500', 'blue.200'),
    iconColor: useColorModeValue('white', '#1A202C'),
  }
};

export default useThemeColors;
