import { Box, useColorModeValue } from '@chakra-ui/react';

interface MenuProps {
    children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
    const borderImage = useColorModeValue(
        'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #8A2BE2 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch',
        'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #483D8B 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch'
    );

    return (
        <Box
            sx={{
                border: '4px solid transparent',
                borderRadius: '6px',
                borderImage: borderImage,
                borderImageSlice: '1',
                padding: '20px',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                maxWidth: '240px',
            }}>
            {children}
        </Box>
    );
};
