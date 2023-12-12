import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { HEADER_HEIGHT } from '../ui/DesignSystem_common';
import { useChakra } from '../ui/useChakra';

/**
 * TarotSpread представляет собой компонент, который является ...
 *
 */
interface TarotSpreadProps {}

export const TarotSpread: FC<TarotSpreadProps> = ({}) => {
    const grid = [
        ['п', 'п', 'п', 'п', 'п', 'к', 'п'],
        ['п', 'п', 'к', 'п', 'п', 'к', 'п'],
        ['к', 'к', 'к', 'к', 'п', 'к', 'п'],
        ['п', 'п', 'к', 'п', 'п', 'к', 'п'],
    ];

    return (
        <Flex
            w="100%"
            h={`calc(100vh - ${HEADER_HEIGHT})`}
            p={4}
            align="center"
            justify="center"
        >
            <Flex direction="column">
                {grid.map((row, rowIndex) => (
                    <Flex key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <Box
                                key={cellIndex}
                                w="10"
                                h="10"
                                bg={cell === 'к' ? 'red.500' : 'transparent'}
                                m={1}
                            />
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
