import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss'


const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartDropdownContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map(item => <CheckoutItem product={item} key={item.id} />)}
            </div>
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
} 

export default Checkout;