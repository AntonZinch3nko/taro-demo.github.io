import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Tooltip,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { getCardNameByNumber, tarotSpreadDescriptions } from '../data/CardInfo';
import { HEADER_HEIGHT } from '../ui/DesignSystem_common';
import { useChakra } from '../ui/useChakra';
import {
    CardDescription,
    generateCardDetails,
    generateRandomNumbers,
    getDescriptionForCard,
} from '../helpers/algorithms';
import { data_future } from '../data/cardSpreads/CelticCross';
import { LazyImage } from '../components/Image/LazyImage';
import { getImageUrl } from './GalleryPage';
import { SpreadModal } from '../components/Modals/SpreadModal';
import { CelticCross } from '../service/SpreadService';

/**
 * TarotSpread представляет собой компонент, который является ...
 *
 */
interface TarotSpreadProps {}

export const TarotSpread: FC<TarotSpreadProps> = ({}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { borderHeaderColor, cardBackground } = useChakra();
    const isMobile = useBreakpointValue({ base: true, sm: false });
    const [spread, setSpread] = useState<
        null | undefined | Array<CardDescription>
    >(null);

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
            let res = [];
            for (let i = 0; i < 4; i++) {
                const next = i + 1;
                const descroption = getDescriptionForCard(
                    cardArray[i],
                    next,
                    data_future
                );
                res.push(descroption);
            }
            setSpread(res);
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
                                if (cell !== 0) {
                                    const description =
                                        tarotSpreadDescriptions[prev];
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
                                                <>
                                                    {spread &&
                                                    spread[prev]?.number ? (
                                                        <LazyImage
                                                            key={cell}
                                                            imageProps={{
                                                                src: getImageUrl(
                                                                    getCardNameByNumber(
                                                                        spread[
                                                                            prev
                                                                        ]
                                                                            ?.number
                                                                    ),
                                                                    true
                                                                ),
                                                                loading: 'lazy',

                                                                style: {
                                                                    transform:
                                                                        spread[
                                                                            prev
                                                                        ]
                                                                            ?.isRevers
                                                                            ? 'scale(-1, -1)'
                                                                            : 'unset',
                                                                    width: isMobile
                                                                        ? '60px'
                                                                        : '118px',
                                                                    height: isMobile
                                                                        ? '80px'
                                                                        : '158px',
                                                                    cursor: 'pointer',
                                                                    transition:
                                                                        '0.3s',
                                                                    overflow:
                                                                        'hidden',
                                                                    position:
                                                                        'relative',
                                                                },
                                                            }}
                                                        />
                                                    ) : (
                                                        <Text
                                                            fontSize={60}
                                                            style={{
                                                                animation:
                                                                    'flip 2s infinite linear',
                                                            }}>
                                                            ?
                                                        </Text>
                                                    )}
                                                </>
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
                    <SpreadModal modalIsOpen={isOpen} closeModal={onClose} />
                    <Flex w='100%' mt={6} justify={'center'}>
                        <Button variant={'main'}>Получить трактовку</Button>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};
