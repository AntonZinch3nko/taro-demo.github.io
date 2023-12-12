import {
    Box,
    Flex,
    Heading,
    Text,
    Tooltip,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { tarotSpreadDescriptions } from '../data/CardInfo';
import { HEADER_HEIGHT } from '../ui/DesignSystem_common';
import { useChakra } from '../ui/useChakra';

/**
 * TarotSpread представляет собой компонент, который является ...
 *
 */
interface TarotSpreadProps {}

export const TarotSpread: FC<TarotSpreadProps> = ({}) => {
    const { borderHeaderColor, cardBackground } = useChakra();
    const isMobile = useBreakpointValue({ base: true, sm: false });
    console.log('isMobile', isMobile);
    const grid = [
        [0, 0, 0, 0, 10],
        [0, 0, 3, 0, 9],
        [2, 5, 1, 6, 8],
        [0, 0, 4, 0, 7],
    ];

    const gridMobile = [
        [10, 9, 8],
        [7, 2, 3],
        [6, 5, 1],
        [0, 4, 0],
    ];

    return (
        <Flex
            w='100%'
            minH={`calc(100vh - ${HEADER_HEIGHT})`}
            p={4}
            align='center'
            justify='center'>
            <Flex direction='column'>
                <Heading textAlign={'center'} mb='12px'>
                    Кельтский Крест
                </Heading>
                {(isMobile ? gridMobile : grid).map((row, rowIndex) => (
                    <Flex key={rowIndex} justifyContent={"center"}>
                        {row.map((cell, cellIndex) => {
                            let content = null;
                            if (cell !== 0) {
                                const description =
                                    tarotSpreadDescriptions[cell - 1]; // Получаем описание
                                content = (
                                    <Tooltip
                                        label={description.toUpperCase()}
                                        textAlign={'center'}>
                                        <Flex
                                            direction='column'
                                            align='center'
                                            justify='center'
                                            h='100%'
                                            w={'100%'}>
                                            <Text
                                                fontSize={60}
                                                style={{
                                                    animation:
                                                        'flip 2s infinite linear',
                                                }}>
                                                ?
                                            </Text>
                                        </Flex>
                                    </Tooltip>
                                );
                            }
                            return (
                                <Box
                                    cursor={'pointer'}
                                    borderRadius={'20px'}
                                    border={
                                        cell !== 0
                                            ? `2px dashed ${borderHeaderColor}`
                                            : 'none'
                                    }
                                    background={
                                        cell !== 0 ? cardBackground : 'unset'
                                    }
                                    key={cellIndex}
                                    w={isMobile ? '60px' : '120px'}
                                    h={isMobile ? '80px' : '160px'}
                                    m={1}
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'>
                                    {content}
                                </Box>
                            );
                        })}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
