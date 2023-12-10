import React from 'react';
import ImageGrid from '../components/ImageSlider/ImageGrid';

function getImageUrl(imageName: string) {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ?process.env.PUBLIC_URL +  '/img/deck/'
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
    getImageUrl('Cups_1'),
    getImageUrl('Cups_2'),
    getImageUrl('Cups_3'),
    getImageUrl('Cups_4'),
    getImageUrl('Cups_5'),
    getImageUrl('Cups_6'),
    getImageUrl('Cups_7'),
    getImageUrl('Cups_8'),
    getImageUrl('Cups_9'),
    getImageUrl('Cups_10'),
    getImageUrl('Cups_page'),
    getImageUrl('Cups_knight'),
    getImageUrl('Cups_queen'),
    getImageUrl('Cups_king'),
    getImageUrl('Sword_1'),
    getImageUrl('Sword_2'),
    getImageUrl('Sword_3'),
    getImageUrl('Sword_4'),
    getImageUrl('Sword_5'),
    getImageUrl('Sword_6'),
    getImageUrl('Sword_7'),
    getImageUrl('Sword_8'),
    getImageUrl('Sword_9'),
    getImageUrl('Sword_10'),
    getImageUrl('Sword_page'),
    getImageUrl('Sword_knight'),
    getImageUrl('Sword_queen'),
    getImageUrl('Sword_king'),
    getImageUrl('Penta_1'),
    getImageUrl('Penta_2'),
    getImageUrl('Penta_3'),
    getImageUrl('Penta_4'),
    getImageUrl('Penta_5'),
    getImageUrl('Penta_6'),
    getImageUrl('Penta_7'),
    getImageUrl('Penta_8'),
    getImageUrl('Penta_9'),
    getImageUrl('Penta_10'),
    getImageUrl('Penta_page'),
    getImageUrl('Penta_knight'),
    getImageUrl('Penta_queen'),
    getImageUrl('Penta_king'),
];

const GalleryPage: React.FC = () => {
    return (
        <div>
            <ImageGrid images={images} />
        </div>
    );
};

export default GalleryPage;
