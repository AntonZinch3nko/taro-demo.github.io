// src/components/AppRouter.tsx
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/gallery' element={<GalleryPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
