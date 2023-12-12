import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CircularButtonWithIcon from './CircularButton';

describe('CircularButtonWithIcon', () => {
    it('renders correctly', () => {
        render(<CircularButtonWithIcon icon={<></>} />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('border-radius: 50%');
        expect(button).toHaveStyle('display: flex');
        expect(button).toHaveStyle('justify-content: center');
        expect(button).toHaveStyle('align-items: center');
    });

    it('passes buttonProps to the Button component', () => {
        const buttonProps = { colorScheme: 'blue' };
        render(
            <CircularButtonWithIcon icon={<></>} buttonProps={buttonProps} />
        );

        const button = screen.getByRole('button');
        expect(button).toHaveClass('chakra-button');
    });
});
