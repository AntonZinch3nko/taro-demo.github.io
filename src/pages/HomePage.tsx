import React from 'react';
import GlassButton from '../components/Buttons/GlassButton/GlassButton';

const HomePage: React.FC = () => {
    const redirectToGallery = () => {
        window.location.href = '/gallery';
    };
    return (
        <div>
            <GlassButton text='Галерея' onClick={redirectToGallery} />
        </div>
    );
};

export default HomePage;
