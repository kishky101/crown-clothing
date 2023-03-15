import renderer from 'react-test-renderer';
import CartItem from './cart-item.component';

test('creating cart-dropdown snapshot', () => {
    const mockCartitem =   {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
        quantity: 2
      };
    const cartitem = renderer.create(<CartItem cartItem={mockCartitem} />).toJSON;
    expect(cartitem).toMatchSnapshot();
})