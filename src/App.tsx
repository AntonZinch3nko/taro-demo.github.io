import { Flex } from '@chakra-ui/react';
import "./App.css";
import Header from './components/Header/Header';
import { RoutesList } from './router/AppRouter';
import { HEADER_HEIGHT } from './ui/DesignSystem_common';
import { useChakra } from './ui/useChakra';

function App() {
    const { bgColor } = useChakra();

    return (
        <>
            <Header />
            <Flex
                mt={HEADER_HEIGHT}
                backgroundColor={bgColor}
                minH={`calc(100vh - ${HEADER_HEIGHT})`}
                flexDir={'column'}
                alignItems={'center'}
                w='100%'
                justify={'center'}
                fontSize={'calc(10px + 2vmin)'}>
                <RoutesList />
            </Flex>
        </>
    );
}

export default App;
