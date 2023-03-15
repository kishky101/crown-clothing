import renderer from 'react-test-renderer';
import SignInForm from './sign-in-form.component';
import { MockStore } from '../../utils/test/setup';
import { BrowserRouter as Router } from 'react-router-dom';

test('creating sign-in-form snapshot', () => {
    const signinform = renderer.create(
        <MockStore>
            <Router>
                <SignInForm />
            </Router>
        </MockStore>
    ).toJSON;
    expect(signinform).toMatchSnapshot();
})