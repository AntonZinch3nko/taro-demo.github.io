import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Heading,
    Switch,
    useColorMode
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSectionTitle } from '../../helpers/typeGuardians';
import { useChakra } from '../../ui/useChakra';
import CircularButton from '../Buttons/CircularButton/CircularButton';

const Header = () => {
    const { bgHeaderColor, borderHeaderColor } = useChakra();

    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation();
    const navigate = useNavigate();

    const currentSection = location.pathname.split('/')[1];
    const sectionTitle = getSectionTitle(currentSection);

    return (
        <Flex
            zIndex={2}
            minH={'68px'}
            top={0}
            w='100%'
            position={'fixed'}
            as='header'
            align='center'
            justify='space-between'
            padding='1rem'
            borderBottom='4px solid'
            borderColor={borderHeaderColor}
            backgroundColor={bgHeaderColor}>
            <Box display='flex' alignItems='center'>
                {currentSection && currentSection !== 'home' && (
                    <CircularButton
                        buttonProps={{
                            w: '20px',
                        }}
                        boxProps={{ mr: '8px' }}
                        icon={<ArrowBackIcon />}
                        onClick={() => navigate('/')}
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
