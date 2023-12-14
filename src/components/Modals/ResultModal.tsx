import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useBreakpointValue,
    Text,
    Heading,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { CardDescription } from '../../helpers/algorithms';
import { StringHelper } from '../../helpers/StringHelper';
import {
    getCardNameByNumber,
    imagesData,
    tarotSpreadDescriptions,
} from '../../data/CardInfo';
import { LazyImage } from '../Image/LazyImage';
import { getImageUrl } from '../../pages/GalleryPage';

/**
 * ResultModal представляет собой компонент, который является ...
 *
 */
interface ResultModalProps {
    titles: string[];
    spreadData: Array<CardDescription>;
    isOpen: boolean;
    onClose: () => void;
}

export const ResultModal: FC<ResultModalProps> = ({
    titles,
    spreadData,
    isOpen,
    onClose,
}) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const isMobile = useBreakpointValue({ base: true, sm: false });
    // console.log('spreadData', spreadData);
    const goBack = () => {
        if (currentPosition > 0) {
            setCurrentPosition(currentPosition - 1);
        }
    };

    const goForward = () => {
        if (currentPosition < titles.length - 1) {
            setCurrentPosition(currentPosition + 1);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={isMobile ? 'full' : 'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {`Позиция: `}
                    {StringHelper.capitalizeFirstLetter(
                        titles[currentPosition]
                    )}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction={isMobile ? 'column' : 'row'} gap={4}>
                        <Flex
                            flex='1'
                            justifyContent='center'
                            alignItems='center'
                            transform={
                                spreadData[currentPosition]?.isRevers
                                    ? 'scale(-1, -1)'
                                    : 'unset'
                            }>
                            <LazyImage
                                imageProps={{
                                    src: getImageUrl(
                                        getCardNameByNumber(
                                            spreadData[currentPosition]?.number
                                        ),
                                        false
                                    ),
                                    loading: 'lazy',
                                    style: {
                                        width: '300px',
                                        height: '380px',
                                        margin: '5px',
                                        cursor: 'pointer',
                                        transition: '0.3s',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    },
                                }}
                            />
                        </Flex>
                        <Flex
                            flex='1'
                            wrap={'wrap'}
                            flexDir={'column'}
                            justifyContent='center'
                            alignItems='center'>
                            <Heading fontSize={18} mb={2}>
                                {
                                    imagesData[
                                        spreadData[currentPosition]?.number - 1
                                    ]?.title
                                }
                            </Heading>
                            <Text>
                                {spreadData[currentPosition]?.description}
                            </Text>
                        </Flex>
                    </Flex>
                </ModalBody>
                <Flex justifyContent='space-between' p={4}>
                    <IconButton
                        aria-label='Назад'
                        icon={<ArrowBackIcon />}
                        onClick={goBack}
                        isDisabled={currentPosition === 0}
                    />
                    <IconButton
                        aria-label='Вперёд'
                        icon={<ArrowForwardIcon />}
                        onClick={goForward}
                        isDisabled={currentPosition === titles.length - 1}
                    />
                </Flex>
            </ModalContent>
        </Modal>
    );
};
