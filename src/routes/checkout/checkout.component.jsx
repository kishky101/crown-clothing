//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
//import { CartDropdownContext } from '../../context/cart-dropdown.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles'


const Checkout = () => {
    //const cartItems = useSelector(selectCartItems)

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

   
    //const {  cartTotal } = useContext(CartDropdownContext)

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

            <PaymentForm />
        </CheckoutContainer>
    )
} 

export default Checkout;