import renderer from 'react-test-renderer';
import CheckoutItem from './checkout-item.component';
import { MockStore } from '../../utils/test/setup';

test('creating checkout-item snapshot', () => {
    const checkoutitem = renderer.create(
        <MockStore>
            <CheckoutItem product= {{
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
                quantity: 2
            }} />
        </MockStore>
    ).toJSON
    expect(checkoutitem).toMatchSnapshot();
})