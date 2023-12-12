import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ColorHelper } from '../../helpers/ColorHelper';
import PlaceholderImage from './PlaceholderImage';

describe('PlaceholderImage', () => {
    beforeEach(() => {
        ColorHelper.getRandomColor = jest.fn(() => '#FF0000');
    });

    it('renders correctly', () => {
        render(<PlaceholderImage boxProps={{ role: 'placeholder-image' }} />);

        expect(screen.getByRole('placeholder-image')).toBeInTheDocument();
    });
});
