import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles'


const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartDropdownContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div>
                {cartItems.map(item => <CheckoutItem product={item} key={item.id} />)}
            </div>
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
} 

export default Checkout;