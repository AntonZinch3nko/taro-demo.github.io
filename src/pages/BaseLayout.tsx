import React, { FC, useLayoutEffect, useState } from 'react';
import GlassButton from '../components/Buttons/GlassButton/GlassButton';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu } from '../components/Menu/Menu';
import { Flex } from '@chakra-ui/react';

const BaseLayout: React.FC = () => {
    const [shouldRenderButton, setShouldRenderButton] = useState(true);
    const location = useLocation();

    useLayoutEffect(() => {
        setShouldRenderButton(location.pathname === '/');
    }, [location]);

    return (
        <>
            {shouldRenderButton && <HomePageMenu />}
            <Outlet />
        </>
    );
};

export default BaseLayout;

interface HomePageMenuProps {}

const HomePageMenu: FC<HomePageMenuProps> = () => {
    return (
        <Menu
            key={window.location.href}
            children={
                <Flex wrap={'wrap'} gap='8px'>
                    <Link to='/tarotSpread' style={{ width: ' 100%' }}>
                        <GlassButton
                            buttonProps={{ w: '100%' }}
                            text='Расклад таро'
                        />
                    </Link>
                    <Link to='/gallery' style={{ width: ' 100%' }}>
                        <GlassButton
                            buttonProps={{ w: '100%' }}
                            text='Галерея'
                        />
                    </Link>
                </Flex>
            }
        />
    );
};
