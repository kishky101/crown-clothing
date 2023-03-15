import renderer from 'react-test-renderer';
import ProductCard from './product-card.component';
import { MockStore } from '../../utils/test/setup';

test('creating product-card snapshot', () => {
    const productcard = renderer.create(
        <MockStore>
            <ProductCard product={{
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            }} />
        </MockStore>
    ).toJSON;
    expect(productcard).toMatchSnapshot();
})