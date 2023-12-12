import React, { useState } from 'react';
import { LazyImage } from '../Image/LazyImage';
import CircularButton from '../Buttons/CircularButton/CircularButton';
import { FlipImage } from '../Image/FlipImage';
import {
    Box,
    Flex,
    Heading,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import { imagesData } from '../../data/CardInfo';
import { RepeatIcon } from '@chakra-ui/icons';
import DesignSystemLight from '../../ui/DesignSystem_light';

interface ImageGridProps {
    getImages: (isThumb?: boolean) => string[]; // массив URL изображений
}

const ImageGrid: React.FC<ImageGridProps> = ({ getImages }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const images = getImages(false);
    const thumbImages = getImages(true);

    const openModal = (index: number) => {
        setCurrentImage(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setIsFlipped(false);
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>
                {thumbImages.map((img, index) => (
                    <LazyImage
                        key={index}
                        imageProps={{
                            src: img,
                            loading: 'lazy',
                            onMouseOver: (e) =>
                                (e.currentTarget.style.transform =
                                    'scale(1.1)'),
                            onMouseOut: (e) =>
                                (e.currentTarget.style.transform = 'scale(1)'),
                            onClick: (e) => openModal(index),
                            style: {
                                width: '150px',
                                height: '200px',
                                margin: '5px',
                                cursor: 'pointer',
                                transition: '0.3s',
                                overflow: 'hidden',
                                position: 'relative',
                            },
                        }}
                    />
                ))}
            </div>
            <Modal isOpen={modalIsOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent backgroundColor={'black'} padding={'80px'}>
                    <ModalCloseButton
                        style={{ color: 'black !important' }}
                        size={'sm'}
                    />
                    <Flex h='400px' justifyContent={'center'}>
                        <CircularButton
                            buttonProps={{
                                width: '40px',
                                height: '40px',
                            }}
                            boxProps={{
                                zIndex: 2,
                                left: 'calc(50% - 20px)',
                                top: '90%',
                                position: 'absolute',
                            }}
                            icon={<RepeatIcon />}
                            onClick={() => {
                                setIsFlipped((prev) => !prev);
                            }}
                        />
                        <FlipImage
                            isFlipped={isFlipped}
                            imageProps={{
                                onClick: () => {
                                    setIsFlipped((prev) => !prev);
                                },
                                src: `${images[currentImage]}`,
                                loading: 'lazy',
                                style: {
                                    width: '300px',
                                    height: '400px',
                                    margin: '5px',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    overflow: 'hidden',
                                    position: 'relative',
                                },
                            }}
                            backContent={
                                <Flex
                                    backgroundColor={
                                        DesignSystemLight.colors.primary
                                    }
                                    w='300px'
                                    h='400px'
                                    m='5px'
                                    p='20px'
                                    borderRadius={'20px'}>
                                    <Box
                                        border={'4px solid black'}
                                        padding={'20px'}
                                        w='100%'
                                        sx={{
                                            borderImage:
                                                'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #3A3A3A 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch',
                                        }}>
                                        <Flex wrap={'wrap'} justify={'center'}>
                                            <Heading
                                                as='h1'
                                                size='xl'
                                                textAlign={'center'}
                                                mb={4}
                                                color={
                                                    DesignSystemLight.colors
                                                        .text
                                                }>
                                                {imagesData[currentImage].title}
                                            </Heading>
                                            <Text
                                                fontSize='lg'
                                                maxWidth='600px'
                                                textAlign='center'
                                                color={
                                                    DesignSystemLight.colors
                                                        .secondaryText
                                                }>
                                                {
                                                    imagesData[currentImage]
                                                        .description
                                                }
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                            }
                        />
                    </Flex>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ImageGrid;
