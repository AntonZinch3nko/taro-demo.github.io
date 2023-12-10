import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import PlaceholderImage from '../Placeholder/PlaceholderImage';
import { LazyImage } from '../Image/LazyImage';

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
                        <div key={index}>
                            <img
                                loading='lazy'
                                src={img}
                                style={{ width: '100%' }}
                            />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </div>
    );
};

export default ImageGrid;
