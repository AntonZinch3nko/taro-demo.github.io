import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Heading,
    IconButton,
    Switch,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSectionTitle } from '../../helpers/typeGuardians';
import DesignSystemLight from '../../ui/DesignSystem_light';
import DesignSystemDark from '../../ui/DesignSystem_dark';

const Header = () => {
    const bgColor = useColorModeValue(
        DesignSystemLight.colors.background,
        DesignSystemDark.colors.background
    );
    const borderColor = useColorModeValue(
        DesignSystemLight.colors.border,
        DesignSystemDark.colors.border
    );

    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const navigate = useNavigate();

    const currentSection = location.pathname.split('/')[1];
    const sectionTitle = getSectionTitle(currentSection);

    return (
        <Flex
            zIndex={2}
            minH={"68px"}
            top={0}
            w='100%'
            position={'fixed'}
            as='header'
            align='center'
            justify='space-between'
            padding='1rem'
            borderBottom='4px solid'
            borderColor={borderColor}
            backgroundColor={bgColor}>
            <Box display='flex' alignItems='center'>
                {currentSection && currentSection !== 'home' && (
                    <IconButton
                        size={'sm'}
                        icon={<ArrowBackIcon />}
                        onClick={() => navigate("/")}
                        marginRight='1rem'
                        aria-label={''}
                    />
                )}
                <Heading fontSize='lg'>{sectionTitle}</Heading>
            </Box>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
            />
        </Flex>
    );
};

export default Header;
