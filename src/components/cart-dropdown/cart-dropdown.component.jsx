import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import Button from '../button/button.component';



import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

    const { cartItems } = useContext(CartDropdownContext)

    const navigate = useNavigate()

    const goToCheckout = () => navigate('/checkout')
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
                <Button onClick = { goToCheckout }>Go To Checkout</Button>
            
        </div>
    )
}

export default CartDropdown;