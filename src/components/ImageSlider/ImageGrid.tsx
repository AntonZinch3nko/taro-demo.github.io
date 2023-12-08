import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';

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
        initialSlide: currentImage
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
            overflow: 'hidden' // Скрыть скроллбары
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)' // Полупрозрачный фон вокруг модального окна
          }
    };

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        style={{ 
                            width: '300px', 
                            height: '400px', 
                            margin: '5px', 
                            cursor: "pointer",
                            transition: '0.3s' // Плавность анимации
                          }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Анимация при наведении
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Возврат к исходному состоянию
                        onClick={() => openModal(index)}
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
                            <img src={img} style={{ width: '100%' }} />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </div>
    );
};

export default ImageGrid;
