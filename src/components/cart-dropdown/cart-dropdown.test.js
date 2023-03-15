import renderer from 'react-test-renderer';
import CartDropdown from './cart-dropdown.component';
import { MockStore } from '../../utils/test/setup';
import { BrowserRouter as Router } from 'react-router-dom';


test('creating cart-dropdown snapshot', () => {
    const cartdropdown = renderer.create(
        <MockStore>
            <Router>
                <CartDropdown />
            </Router>
        </MockStore>
    ).toJSON;
    expect(cartdropdown).toMatchSnapshot();
})
