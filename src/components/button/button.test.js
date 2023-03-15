import renderer from 'react-test-renderer';
import Button from './button.component';
//import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';

test('craeting button snapshot', () => {
    const mockprop = { 
        children: 'Go to Home',
        isLoading: false,
        buttonTypes: 'inverted'
    }
    const button = renderer.create(<Button prop = {mockprop} />).toJSON;
    expect(button).toMatchSnapshot();
})
