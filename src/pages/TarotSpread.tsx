import {
    Box,
    Button,
    Flex,
    Heading,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { SpreadBoardTarotCard } from '../components/Card/SpreadBoardTarotCard';
import { SpreadModal } from '../components/Modals/SpreadModal';
import { tarotSpreadDescriptions } from '../data/CardInfo';
import { data_future } from '../data/cardSpreads/CelticCross';
import {
    CardDescription,
    generateCardDetails,
    generateRandomNumbers,
    getDescriptionForCard,
} from '../helpers/algorithms';
import { CelticCross } from '../service/SpreadService';
import { HEADER_HEIGHT } from '../ui/DesignSystem_common';
import { useChakra } from '../ui/useChakra';
import { ResultModal } from '../components/Modals/ResultModal';

/**
 * TarotSpread представляет собой компонент, который является ...
 *
 */
interface TarotSpreadProps {}

export const TarotSpread: FC<TarotSpreadProps> = ({}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isOpen: isResultOpen,
        onClose: onResultClose,
        onOpen: onResultOpen,
    } = useDisclosure();
    const { borderHeaderColor, cardBackground } = useChakra();
    const isMobile = useBreakpointValue({ base: true, sm: false });
    const [spread, setSpread] = useState<
        Array<CardDescription & { isVisible: boolean }>
    >([]);

    const [seed, setSeed] = useState<string | null>(null);

    const cardArray = useMemo(
        () =>
            seed
                ? generateCardDetails(generateRandomNumbers(seed as string), 0)
                : [],
        [seed]
    );

    const isReadyForStart = cardArray.length;

    useLayoutEffect(() => {
        if (!seed && !isOpen) {
            onOpen();
        }
    }, [seed, isOpen]);

    useEffect(() => {
        if (isReadyForStart) {
            let timerId: string | number | NodeJS.Timeout | undefined;

            const revealCards = (index = 0) => {
                if (index < cardArray.length) {
                    const description = getDescriptionForCard(
                        cardArray[index],
                        index + 1,
                        data_future
                    );
                    setSpread((spread) => [
                        ...spread,
                        { ...description, isVisible: true },
                    ]);

                    timerId = setTimeout(() => revealCards(index + 1), 1000);
                }
            };

            revealCards();
            return () => clearTimeout(timerId);
        }
    }, [cardArray, isReadyForStart]);

    return (
        <Flex
            w='100%'
            minH={`calc(100vh - ${HEADER_HEIGHT})`}
            p={4}
            align='center'
            justify='center'>
            {seed && (
                <Flex direction='column'>
                    <Heading textAlign={'center'} mb='12px'>
                        Кельтский Крест
                    </Heading>
                    {(!isMobile
                        ? CelticCross.grid
                        : CelticCross.gridMobile
                    ).map((row, rowIndex) => (
                        <Flex key={rowIndex} justifyContent={'center'}>
                            {row.map((cell, cellIndex) => {
                                let prev = cell - 1;
                                let content = null;
                                const description =
                                    tarotSpreadDescriptions[prev];
                                if (cell !== 0) {
                                    content = (
                                        <SpreadBoardTarotCard
                                            description={description}
                                            card={spread[prev]}
                                            isMobile={!!isMobile}
                                        />
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
                                            cell !== 0
                                                ? cardBackground
                                                : 'unset'
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
                    {spread.length === 10 && (
                        <Flex w='100%' mt={6} justify={'center'}>
                            <Button
                                variant={'main'}
                                onClick={() => {
                                    onResultOpen();
                                }}>
                                Получить трактовку
                            </Button>
                        </Flex>
                    )}
                </Flex>
            )}
            <ResultModal
                titles={tarotSpreadDescriptions}
                spreadData={spread}
                isOpen={isResultOpen}
                onClose={onResultClose}
            />
            <SpreadModal
                setSeed={setSeed}
                modalIsOpen={isOpen}
                closeModal={onClose}
            />
        </Flex>
    );
};
