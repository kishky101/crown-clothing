import { render, screen } from '@testing-library/react';
import Button, {BUTTON_TYPE_CLASSES} from '../button.component';

describe('button tests',  () => {
    test('should render a base button when no prop is passed', () => {
        render(<Button />);

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: black')
    });

    test('should render inverted button when button type is inverted', () => {
        
        render(<Button buttonTypes={BUTTON_TYPE_CLASSES.inverted} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: white');
    });

    test('should render google button when button type is google', () => {

        render(<Button buttonTypes={BUTTON_TYPE_CLASSES.google} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyle('background-color: #4285f4')
    });

    test('should be disabled if loading is true', () => {
        render(<Button isLoading={true} />)
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })
});