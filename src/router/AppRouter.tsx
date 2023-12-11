// src/components/AppRouter.tsx
import {
    RouteObject,
    useRoutes
} from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';

export const routes = [
    {
        path: '/',
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

export enum SectionTitles {
    Home = "Главная",
    Gallery = "Галерея",
}