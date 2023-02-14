import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { UserProvider } from './context/user.context';
//import { CategoriesProvider } from './context/categories.context';
//import { CartDropdownProvider } from './context/cart-dropdown.context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/*<UserProvider>*/}
            {/*<CategoriesProvider>*/}
              {/*<CartDropdownProvider>*/}
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
              {/*<CartDropdownProvider>*/}
            {/*<CategoriesProvider>*/}
          {/*</UserProvider>*/}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
