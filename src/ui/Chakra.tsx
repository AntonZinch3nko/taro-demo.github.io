import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
});

export const Chakra = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);