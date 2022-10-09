import { extendTheme } from '@chakra-ui/react';

const properties = {
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
};

const theme = extendTheme(properties);

export default theme;
