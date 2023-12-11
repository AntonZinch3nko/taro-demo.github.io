import {
    ChakraProvider,
    ColorModeProvider,
    ColorModeScript,
    ComponentStyleConfig,
    CSSReset,
    defineStyleConfig,
    StyleFunctionProps,
} from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import DesignSystemDark from './DesignSystem_dark';
import DesignSystemLight from './DesignSystem_light';

const Button: ComponentStyleConfig = {
    baseStyle: (props: StyleFunctionProps) => ({
        backgroundColor:
            props.colorMode === 'dark'
                ? DesignSystemDark.colors.buttonBackground
                : DesignSystemLight.colors.buttonBackground,
        color:
            props.colorMode === 'dark'
                ? DesignSystemDark.colors.buttonText
                : DesignSystemLight.colors.buttonText,

        _hover: {
            backgroundColor:
                props.colorMode === 'dark'
                    ? DesignSystemDark.colors.buttonHover
                    : DesignSystemLight.colors.buttonHover,
        },
        _active: {
            backgroundColor:
                props.colorMode === 'dark'
                    ? DesignSystemDark.colors.buttonActive
                    : DesignSystemLight.colors.buttonActive,
        },
        _focus: {
            boxShadow:
                props.colorMode === 'dark'
                    ? DesignSystemDark.shadows.middle
                    : DesignSystemLight.shadows.middle,
        },
    }),
};
const Switch: ComponentStyleConfig = {
    baseStyle: (props: StyleFunctionProps) => ({
        track: {
            _checked: {
                bg:
                    props.colorMode === 'dark'
                        ? DesignSystemDark.colors.buttonBackground
                        : DesignSystemLight.colors.buttonBackground,
            },
        },
    }),
};

const customTheme = extendTheme({
    components: {
        Button,
        Switch,
    },
    styles: {
        global: {
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
    colors: {
        ...DesignSystemDark.colors,
        ...DesignSystemLight.colors,
    },
    shadows: {
        ...DesignSystemDark.shadows,
        ...DesignSystemLight.shadows,
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
});

export const Chakra = ({ children }: { children: React.ReactNode }) => (
    <ChakraProvider theme={customTheme}>
        <CSSReset />
        <ColorModeScript
            initialColorMode={customTheme.config.initialColorMode}
        />

        {children}
    </ChakraProvider>
);
