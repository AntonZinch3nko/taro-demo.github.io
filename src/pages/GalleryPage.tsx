import React from 'react';
import ImageGrid from '../components/ImageSlider/ImageGrid';

function getImageUrl(imageName: string, isThumb?: boolean) {
    const baseUrl =
        process.env.NODE_ENV === 'development'
            ? process.env.PUBLIC_URL + '/img/deck/'
            : 'https://antonzinch3nko.github.io/taro-demo.github.io/img/deck/';
    return `${baseUrl}${imageName}${isThumb ? '@0,33x' : ''}.png`;
}


const getImages = (isThumb?: boolean) => {

    const images = [
        getImageUrl('Fool', isThumb),
        getImageUrl('Magician', isThumb),
        getImageUrl('Pristess', isThumb),
        getImageUrl('Empress', isThumb),
        getImageUrl('Emperor', isThumb),
        getImageUrl('Hierophant', isThumb),
        getImageUrl('Lovers', isThumb),
        getImageUrl('Chariot', isThumb),
        getImageUrl('Strength', isThumb),
        getImageUrl('Hermit', isThumb),
        getImageUrl('Wheel', isThumb),
        getImageUrl('Justice', isThumb),
        getImageUrl('Hunged_man', isThumb),
        getImageUrl('Death', isThumb),
        getImageUrl('Temperance', isThumb),
        getImageUrl('Devil', isThumb),
        getImageUrl('Tower', isThumb),
        getImageUrl('Star', isThumb),
        getImageUrl('Moon', isThumb),
        getImageUrl('Sun', isThumb),
        getImageUrl('Judgement', isThumb),
        getImageUrl('World', isThumb),
        getImageUrl('Wands_1', isThumb),
        getImageUrl('Wands_2', isThumb),
        getImageUrl('Wands_3', isThumb),
        getImageUrl('Wands_4', isThumb),
        getImageUrl('Wands_5', isThumb),
        getImageUrl('Wands_6', isThumb),
        getImageUrl('Wands_7', isThumb),
        getImageUrl('Wands_8', isThumb),
        getImageUrl('Wands_9', isThumb),
        getImageUrl('Wands_10', isThumb),
        getImageUrl('Wands_page', isThumb),
        getImageUrl('Wands_knight', isThumb),
        getImageUrl('Wands_queen', isThumb),
        getImageUrl('Wands_king', isThumb),
        getImageUrl('Cups_1', isThumb),
        getImageUrl('Cups_2', isThumb),
        getImageUrl('Cups_3', isThumb),
        getImageUrl('Cups_4', isThumb),
        getImageUrl('Cups_5', isThumb),
        getImageUrl('Cups_6', isThumb),
        getImageUrl('Cups_7', isThumb),
        getImageUrl('Cups_8', isThumb),
        getImageUrl('Cups_9', isThumb),
        getImageUrl('Cups_10', isThumb),
        getImageUrl('Cups_page', isThumb),
        getImageUrl('Cups_knight', isThumb),
        getImageUrl('Cups_queen', isThumb),
        getImageUrl('Cups_king', isThumb),
        getImageUrl('Sword_1', isThumb),
        getImageUrl('Sword_2', isThumb),
        getImageUrl('Sword_3', isThumb),
        getImageUrl('Sword_4', isThumb),
        getImageUrl('Sword_5', isThumb),
        getImageUrl('Sword_6', isThumb),
        getImageUrl('Sword_7', isThumb),
        getImageUrl('Sword_8', isThumb),
        getImageUrl('Sword_9', isThumb),
        getImageUrl('Sword_10', isThumb),
        getImageUrl('Sword_page', isThumb),
        getImageUrl('Sword_knight', isThumb),
        getImageUrl('Sword_queen', isThumb),
        getImageUrl('Sword_king', isThumb),
        getImageUrl('Penta_1', isThumb),
        getImageUrl('Penta_2', isThumb),
        getImageUrl('Penta_3', isThumb),
        getImageUrl('Penta_4', isThumb),
        getImageUrl('Penta_5', isThumb),
        getImageUrl('Penta_6', isThumb),
        getImageUrl('Penta_7', isThumb),
        getImageUrl('Penta_8', isThumb),
        getImageUrl('Penta_9', isThumb),
        getImageUrl('Penta_10', isThumb),
        getImageUrl('Penta_page', isThumb),
        getImageUrl('Penta_knight', isThumb),
        getImageUrl('Penta_queen', isThumb),
        getImageUrl('Penta_king', isThumb),
    ];

    return images
};


const GalleryPage: React.FC = () => {
    return (
        <div>
            <ImageGrid getImages={getImages} />
        </div>
    );
};

export default GalleryPage;
