import renderer from 'react-test-renderer';
import DirectoryItem from './directory-item.component';
import { BrowserRouter as Router } from 'react-router-dom';

test('creating directory-item snapshot', () => {
    const directoryitem = renderer.create(
        <Router>
            <DirectoryItem category={{
                "id": 2,
                "title": "jackets",
                "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
                route: 'shop/jackets'
            }} />
        </Router>
    ).toJSON;
    expect(directoryitem).toMatchSnapshot();
})