import React, { FC, ReactNode } from 'react';
import './Menu.css'; 

/**
 * Menu представляет собой компонент, который является ...
 *
 */
interface MenuProps {
    children: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children }) => {
    return <div className='obemny-border'>{children}</div>;
};
