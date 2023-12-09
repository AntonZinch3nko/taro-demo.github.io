import React from 'react';
import ImageGrid from '../components/ImageSlider/ImageGrid';

function getImageUrl(imageName: string) {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? '/img/deck/'
            : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/';
    return `${baseUrl}${imageName}.png`;
}

const images = [
    getImageUrl('Fool'),
    getImageUrl('Magician'),
    getImageUrl('Pristess'),
    getImageUrl('Empress'),
    getImageUrl('Emperor'),
    getImageUrl('Hierophant'),
    getImageUrl('Lovers'),
    getImageUrl('Chariot'),
    getImageUrl('Strength'),
    getImageUrl('Hermit'),
    getImageUrl('Wheel'),
    getImageUrl('Justice'),
    getImageUrl('Hunged_man'),
    getImageUrl('Death'),
    getImageUrl('Temperance'),
    getImageUrl('Devil'),
    getImageUrl('Tower'),
];

const GalleryPage: React.FC = () => {
    return (
        <div>
            <ImageGrid images={images} />
        </div>
    );
};

export default GalleryPage;
