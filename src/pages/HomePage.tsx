import React from 'react';
import GlassButton from '../components/Buttons/GlassButton/GlassButton';
import { Link, Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            {window.location.pathname === '/taro-demo.github.io' && (
                <Link to='/taro-demo.github.io/gallery'>
                    <GlassButton text='Галерея' onClick={() => {}} />
                </Link>
            )}
            <Outlet />
        </div>
    );
};

export default HomePage;
