// src/components/AppRouter.tsx
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';

export const determineCurrentPage = () => {
  const currentUrl = window.location.pathname;
  return currentUrl === '/gallery' ? <GalleryPage /> : <HomePage />;
};
