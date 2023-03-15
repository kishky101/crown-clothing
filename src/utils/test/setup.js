import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);

const store = mockStore({
    cart: {
        isCartOpen: false,
        cartItems: [{
            id: 6,
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
            price: 14,
            quantity: 2
        }]
    },
    user: {
        currentUser: null,
        isLoading: false,
        error: null
    },
    categories: {
        categories: [],
        isLoading: false,
        error: null
    }
})

export const MockStore = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}