import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      // 'body': {
      //   backgroundColor: "red", // ваше обычное глобальное стилизование для body
      // },
      '::-webkit-scrollbar': {
        width: '4px',
      },
      '::-webkit-scrollbar-track': {
        width: '6px',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'gray',
        borderRadius: '24px',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f5f5f5',
      900: '#1a202c',
    },
  },
  // ... другие компоненты
});

export const Chakra = ({ children }: { children: React.ReactNode }) => (
    <ChakraProvider theme={customTheme}>
        <ColorModeProvider>
            <CSSReset />
            {children}
        </ColorModeProvider>
    </ChakraProvider>
);
