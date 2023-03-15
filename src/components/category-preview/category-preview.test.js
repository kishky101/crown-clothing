import renderer from 'react-test-renderer';
import CategoryPreview from './category-preview.components';
import 'jest-styled-components';
import { MockStore } from '../../utils/test/setup';
import { BrowserRouter as Router } from 'react-router-dom';


test('creating category-preview snapshot', () => {
        const carticon = renderer.create(
            <MockStore>
                <Router>
                    <CategoryPreview title='hats' products={[{
                        id: 6,
                        name: 'Palm Tree Cap',
                        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                        price: 14,
                        quantity: 2
                    }]} />
                </Router>
            </MockStore>
            
        ).toJSON;
        expect(carticon).toMatchSnapshot();
})