import { useColorModeValue } from "@chakra-ui/react";

const useThemeColors = () => {
  return {
    primary: useColorModeValue('pink.600', 'purple.600'),
    secondary: useColorModeValue('blue.100', 'blue.100'),
    fontColor: useColorModeValue('black', 'white'),
    btnHover: useColorModeValue('pink.800', 'purple.800'),
    navHover: useColorModeValue('pink.600', 'blue.300'),
    linkColor: useColorModeValue('pink.600', 'blue.300'),
    hrColor: useColorModeValue('pink.600', 'blue.300'),
    iconColor: useColorModeValue('white', '#1A202C'),
    gradient: useColorModeValue('linear(to-r, pink.500, blue.500)', 'linear(to-r, blue.200, purple.500)'),
  }
};

export default useThemeColors;
