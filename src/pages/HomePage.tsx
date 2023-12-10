import React, { useLayoutEffect, useState } from 'react';
import GlassButton from '../components/Buttons/GlassButton/GlassButton';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu } from '../components/Menu/Menu';

const HomePage: React.FC = () => {
    const [shouldRenderButton, setShouldRenderButton] = useState(true);
    const location = useLocation();

    useLayoutEffect(() => {
        setShouldRenderButton(location.pathname === "/");
    }, [location]);

    return (
        <div>
            {shouldRenderButton && (
                <Menu
                    key={window.location.href}
                    children={
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                            }}>
                            <Link
                                to='/gallery'
                                style={{
                                    width: ' 100%',
                                    cursor: 'not-allowed',
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                }}>
                                <GlassButton
                                    buttonProps={{
                                        disabled: true,
                                    }}
                                    text='Получить расклад'
                                />
                            </Link>
                            <Link to='/gallery' style={{ width: ' 100%' }}>
                                <GlassButton
                                    text='Галерея'
                                />
                            </Link>
                        </div>
                    }
                />
            )}
            <Outlet />
        </div>
    );
};

export default HomePage;
