import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { LazyImage } from '../Image/LazyImage';
import CircularButton from '../Buttons/CircularButton/CircularButton';
import { FlipImage } from '../Image/FlipImage';
import { Box, Flex } from '@chakra-ui/react';

interface ImageGridProps {
    images: string[]; // массив URL изображений
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openModal = (index: number) => {
        setCurrentImage(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentImage,
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '600px', // Ширина модального окна
            height: '800px', // Высота модального окна
            overflow: 'hidden', // Скрыть скроллбары
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // Полупрозрачный фон вокруг модального окна
        },
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FlipImage
                    imageProps={{
                        src: `${images[0]}`,
                        loading: 'lazy',
                        onMouseOver: (e) =>
                            (e.currentTarget.style.transform = 'scale(1.05)'),
                        onMouseOut: (e) =>
                            (e.currentTarget.style.transform = 'scale(1)'),
                        // onClick: (e) => openModal(index),
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
                            backgroundColor={'#FEF4E0'}
                            w='300px'
                            h='400px'
                            m='5px'
                            p='20px'
                            borderRadius={'20px'}>
                            <Box
                                border={'4px solid black'}
                                // borderRadius={'20px'}
                                padding={"20px"}
                                color={"#110016"}
                                w='100%'
                                sx={{
                                    borderImage:
                                        'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, #3A3A3A 50%, rgba(0, 0, 0, 0.5) 100%) 1 / 1 / 0 stretch',
                                }}
                                
                                >
                                TEXT
                            </Box>
                        </Flex>
                    }
                />
                {images.map((img, index) => (
                    <LazyImage
                        key={index}
                        imageProps={{
                            src: img,
                            loading: 'lazy',
                            onMouseOver: (e) =>
                                (e.currentTarget.style.transform =
                                    'scale(1.05)'),
                            onMouseOut: (e) =>
                                (e.currentTarget.style.transform = 'scale(1)'),
                            onClick: (e) => openModal(index),
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
                    />
                ))}
            </div>
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Image Modal'>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <div>
                                <CircularButton />
                            </div>

                            <img
                                loading='lazy'
                                src={img}
                                style={{ width: '100%' }}
                            />
                            <LazyImage
                                key={index}
                                imageProps={{
                                    src: img,
                                    loading: 'lazy',
                                    style: {
                                        width: '100%',
                                    },
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </div>
    );
};

export default ImageGrid;
