import renderer from 'react-test-renderer';
import FormInput from './form-input.component';

test('creating form-input snapshot', () => {
    const forminput = renderer.create(<FormInput />).toJSON
    expect(forminput).toMatchSnapshot();
})