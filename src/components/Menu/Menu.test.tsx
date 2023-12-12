import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './Menu';

describe('Menu', () => {
  it('renders its children', () => {
    render(
      <Menu>
        <div>Test Child</div>
      </Menu>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

});