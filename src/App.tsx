import { HashRouter as Router } from 'react-router-dom';
import { RoutesList } from './router/AppRouter';
import { Box, Flex } from '@chakra-ui/react';
import Header from './components/Header/Header';
import { useColorModeValue } from '@chakra-ui/react';
import DesignSystemDark from './ui/DesignSystem_dark';
import DesignSystemLight from './ui/DesignSystem_light';

function App() {
    const bgColor = useColorModeValue(
        DesignSystemLight.colors.background,
        DesignSystemDark.colors.background
    );

    return (
        <Router>
            <Header />
            <Flex
                mt='68px'
                backgroundColor={bgColor}
                minH={'calc(100vh - 68px)'}
                flexDir={'column'}
                alignItems={'center'}
                justify={'center'}
                fontSize={'calc(10px + 2vmin)'}>
                <Box p={3}>
                    <RoutesList />
                </Box>
            </Flex>
        </Router>
    );
}

export default App;
