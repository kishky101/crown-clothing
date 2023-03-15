import renderer from 'react-test-renderer';
import Spinner from './spinner.component';

test('creating spinner snapshot', () => {
    const spinner = renderer.create(<Spinner />).toJSON;
    expect(spinner).toMatchSnapshot();
})