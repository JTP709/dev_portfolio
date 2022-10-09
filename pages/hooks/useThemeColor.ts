import { useColorModeValue } from "@chakra-ui/react";

export enum THEME_KEYS {
  COLOR = 'COLOR',
};

const colors = {
  [THEME_KEYS.COLOR]: ['pink.500', 'purple.500']
};

const useThemeColor = (key: THEME_KEYS) => {
  const color = colors[key];

  return useColorModeValue(color[0], color[1]);
};

export default useThemeColor;
