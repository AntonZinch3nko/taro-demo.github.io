import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark', // Set the initial color mode to dark
    useSystemColorMode: false, // Optionally, you can set this to true to use the system color mode
  },
  colors: {
    // Define your color palette here
    brand: {
      50: '#f5f5f5', // Light shade
      900: '#1a202c', // Dark shade
      // ... more shades
    },
  },
  components: {
    // Customize specific components
    Button: {
      // Setting the default color scheme for Button
      // defaultProps: {
      //   colorScheme: 'brand',
      // },
    },
    // ... other components
  },
});
export const Chakra = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={customTheme}>
    <ColorModeProvider>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);