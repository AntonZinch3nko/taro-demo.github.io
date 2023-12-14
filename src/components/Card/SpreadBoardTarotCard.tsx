import React, { FC } from 'react';
import { CardDescription } from '../../helpers/algorithms';
import { Flex, Tooltip, Text } from '@chakra-ui/react';
import { LazyImage } from '../Image/LazyImage';
import { getImageUrl } from '../../pages/GalleryPage';
import { getCardNameByNumber } from '../../data/CardInfo';

/**
 * SpreadBoardTarotCard представляет собой компонент, который является ...
 *
 */
interface SpreadBoardTarotCardProps {
    card: CardDescription & { isVisible: boolean };
    isMobile: boolean;
    description: string;
}

export const SpreadBoardTarotCard: FC<SpreadBoardTarotCardProps> = ({
    card,
    isMobile,
    description,
}) => {
    return (
        <Tooltip label={description.toUpperCase()} textAlign={'center'}>
            <Flex
                direction='column'
                align='center'
                justify='center'
                h='100%'
                w={'100%'}
                className={`fade-in ${card?.isVisible ? 'visible' : ''}`}>
                {card?.number ? (
                    <LazyImage
                        imageProps={{
                            src: getImageUrl(
                                getCardNameByNumber(card.number),
                                true
                            ),
                            loading: 'lazy',
                            style: {
                                transition: 'opacity 1s',
                                transform: card?.isRevers
                                    ? 'scale(-1, -1)'
                                    : 'unset',
                                width: isMobile ? '60px' : '118px',
                                height: isMobile ? '80px' : '158px',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                position: 'relative',
                            },
                        }}
                    />
                ) : (
                    <Text
                        fontSize={60}
                        style={{ animation: 'flip 2s infinite linear' }}>
                        ?
                    </Text>
                )}
            </Flex>
        </Tooltip>
    );
};
