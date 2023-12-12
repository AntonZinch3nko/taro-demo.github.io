import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FlipImage } from './FlipImage';
import PlaceholderImage from '../Placeholder/PlaceholderImage';

describe('FlipImage', () => {
  const imageProps = {
    src: 'test-image.jpg',
    alt: 'Test Image',
  };

//   it('renders the placeholder before image load', () => {
//     render(
//       <FlipImage
//         imageProps={imageProps}
//         backContent={<div>Back Content</div>}
//         isFlipped={false}
//       />
//     );

//     expect(screen.getByText('Loading...')).toBeInTheDocument(); // Предполагая, что PlaceholderImage отображает "Loading..."
//   });

  it('renders the image after loading', () => {
    render(
      <FlipImage
        imageProps={imageProps}
        backContent={<div>Back Content</div>}
        isFlipped={false}
      />
    );

    fireEvent.load(screen.getByRole('img', { hidden: true }));
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('flips to show the back content', () => {
    render(
      <FlipImage
        imageProps={imageProps}
        backContent={<div>Back Content</div>}
        isFlipped={true}
      />
    );

    expect(screen.getByText('Back Content')).toBeInTheDocument();
  });
});