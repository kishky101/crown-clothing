import renderer from 'react-test-renderer';
import Directories from './directories.component';
import { BrowserRouter as Router } from 'react-router-dom';

test('creating directorie snapshot', () => {
    const directories = renderer.create(
        <Router>
            <Directories />
        </Router>
    ).toJSON;
    expect(directories).toMatchSnapshot();
})