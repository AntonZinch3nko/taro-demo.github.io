import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlassButton from './GlassButton';

describe('GlassButton', () => {
  it('renders with the provided text', () => {
    const buttonText = 'Click Me';
    render(<GlassButton text={buttonText} />);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<GlassButton text="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom buttonProps', () => {
    const buttonProps = {
      colorScheme: 'blue',
      isDisabled: true,
    };
    render(<GlassButton text="Click Me" buttonProps={buttonProps} />);

    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('chakra-button');
    expect(button).toBeDisabled();
  });

  // Дополнительные тесты могут включать проверку стилей, если это необходимо
});