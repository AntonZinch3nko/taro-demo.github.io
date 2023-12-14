import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LazyImage } from '../Image/LazyImage';
import { PreviewModel } from '../Modals/PreviewModel';

interface ImageGridProps {
    getImages: (isThumb?: boolean) => string[];
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
        <Box>
            <Flex wrap={'wrap'} justifyContent={'space-between'}>
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
            </Flex>
            <PreviewModel
                modalIsOpen={modalIsOpen}
                isFlipped={isFlipped}
                currentImage={currentImage}
                images={images}
                closeModal={closeModal}
                setIsFlipped={setIsFlipped}
            />
        </Box>
    );
};

export default ImageGrid;
