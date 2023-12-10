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
    getImageUrl('Star'),
    getImageUrl('Moon'),
    getImageUrl('Sun'),
    getImageUrl('Judgement'),
    getImageUrl('World'),
    getImageUrl('Wands_1'),
    getImageUrl('Wands_2'),
    getImageUrl('Wands_3'),
    getImageUrl('Wands_4'),
    getImageUrl('Wands_5'),
    getImageUrl('Wands_6'),
    getImageUrl('Wands_7'),
    getImageUrl('Wands_8'),
    getImageUrl('Wands_9'),
    getImageUrl('Wands_10'),
    getImageUrl('Wands_page'),
    getImageUrl('Wands_knight'),
    getImageUrl('Wands_queen'),
    getImageUrl('Wands_king'),
];

const GalleryPage: React.FC = () => {
    return (
        <div>
            <ImageGrid images={images} />
        </div>
    );
};

export default GalleryPage;
