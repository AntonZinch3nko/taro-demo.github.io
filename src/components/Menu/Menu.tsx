import { Box } from '@chakra-ui/react';
import { useChakra } from '../../ui/useChakra';

interface MenuProps {
    children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
    const { borderMenuImage } = useChakra();

    return (
        <Box
            sx={{
                border: '4px solid transparent',
                borderRadius: '6px',
                borderImage: borderMenuImage,
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
