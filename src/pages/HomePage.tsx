import React from 'react';
import GlassButton from '../components/Buttons/GlassButton/GlassButton';
import { Link, Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {
    console.log("window.location.pathname",window.location.pathname)
    return (
        <div>
             <Link to='/gallery'>
                    <GlassButton text='Галерея' onClick={() => {}} />
                </Link>
            <Outlet />
        </div>
    );
};

export default HomePage;
