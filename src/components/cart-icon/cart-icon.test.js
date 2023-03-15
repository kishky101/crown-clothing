import renderer from 'react-test-renderer';
import CartIcon from './cart-icon.component';
import { MockStore } from '../../utils/test/setup';


test('creating cart-icon snapshot', () => {
    const carticon = renderer.create(
        <MockStore>
            <CartIcon />
        </MockStore>
        
    ).toJSON;
    expect(carticon).toMatchSnapshot();
})