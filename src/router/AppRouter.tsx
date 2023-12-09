// src/components/AppRouter.tsx
import React from 'react';
import {
    BrowserRouter,
    Route,
    RouteObject,
    Routes,
    useRoutes,
} from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';

export const routes = [
    {
        path: '/taro-demo.github.io',
        breadcrumb: 'Главная',
        element: <HomePage />,
        children: [
            {
                path: 'gallery', 
                element: <GalleryPage />,
                breadcrumb: 'Галерея',
            },
        ],
    },
];

export const RoutesList = () => {
    const element = useRoutes(routes as RouteObject[]);
    return <>{element}</>;
};
