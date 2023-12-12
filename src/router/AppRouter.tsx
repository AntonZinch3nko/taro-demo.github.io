import { RouteObject, useRoutes } from 'react-router-dom';
import BaseLayout from '../pages/BaseLayout';
import GalleryPage from '../pages/GalleryPage';
import { TarotSpread } from '../pages/TarotSpread';

export enum SectionTitles {
    Home = 'Главная',
    Gallery = 'Галерея',
    TarotSpread = 'Расклад таро',
}

export const routes = [
    {
        path: '/',
        breadcrumb: SectionTitles.Home,
        element: <BaseLayout />,
        children: [
            {
                path: 'gallery',
                element: <GalleryPage />,
                breadcrumb: SectionTitles.Gallery,
            },
            {
                path: 'tarotSpread',
                element: <TarotSpread />,
                breadcrumb: SectionTitles.TarotSpread,
            },
        ],
    },
];
export const RoutesList = () => {
    const element = useRoutes(routes as RouteObject[]);
    return <>{element}</>;
};
