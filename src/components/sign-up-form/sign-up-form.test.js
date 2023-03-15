import renderer from 'react-test-renderer';
import SignUp from './sign-up-form.component';
import { MockStore } from '../../utils/test/setup';

test('creating sign-up-form', () => {
    const signup = renderer.create(
        <MockStore>
            <SignUp />
        </MockStore>
    ).toJSON;
    expect(signup).toMatchSnapshot();
})