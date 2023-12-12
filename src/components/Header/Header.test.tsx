import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { getSectionTitle } from '../../helpers/typeGuardians';

// Мокаем useColorMode, useLocation и useNavigate
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: () => ({
    colorMode: 'light',
    toggleColorMode: jest.fn(),
  }),
}));

const currentSection = location.pathname.split('/')[1];
const sectionTitle = getSectionTitle(currentSection);


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: '/not-home', 
    }),
    useNavigate: () => jest.fn(),
  }));

describe('Header', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen?.getByText(sectionTitle)).toBeInTheDocument();
  });

//   it('toggles color mode', () => {
//     const { toggleColorMode } = require('@chakra-ui/react').useColorMode();
//     render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );

//     fireEvent.click(screen.getByRole('checkbox'));
//     expect(toggleColorMode).toHaveBeenCalledTimes(1);
//   });

//   it('navigates back on button click', () => {
//     const navigate = require('react-router-dom').useNavigate();
//     render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );

//     expect(navigate).toHaveBeenCalledWith('/');
//   });
});