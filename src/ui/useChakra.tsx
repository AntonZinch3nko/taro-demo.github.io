import { useColorModeValue } from '@chakra-ui/react';
import DesignSystemLight from './DesignSystem_light';
import DesignSystemDark from './DesignSystem_dark';

export const useChakra = () => {
    const borderMenuImage = useColorModeValue(
        'radial-gradient(circle at center, rgba(254, 243, 225, 0.1) 0%, #8A2BE2 0%, rgba(254, 244, 225, 0.1) 80%) 1/1/0 stretch',
        'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #483D8B 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch'
    );

    const bgHeaderColor = useColorModeValue(
        DesignSystemLight.colors.background,
        DesignSystemDark.colors.background
    );


    const borderHeaderColor = useColorModeValue(
        DesignSystemLight.colors.border,
        DesignSystemDark.colors.border
    );

    const buttonShadow = useColorModeValue(
        DesignSystemLight.shadows.middle,
        DesignSystemDark.shadows.middle
    );

    const bgColor = useColorModeValue(
        DesignSystemLight.colors.background,
        DesignSystemDark.colors.background
    );

    return { borderMenuImage, bgHeaderColor, borderHeaderColor, buttonShadow, bgColor };
};
