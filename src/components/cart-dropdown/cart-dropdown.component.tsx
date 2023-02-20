import React, {MouseEvent} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import CartItem from '../cart-item/cart-item.component';
// import { useContext } from 'react';
// import { CartDropdownContext } from '../../context/cart-dropdown.context';
import Button from '../button/button.component';



import { CartDropdownContainer, CartItemsContainer, EmptyMessage} from './cart-dropdown.styles'
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    //const { cartItems } = useContext(CartDropdownContext)

    const navigate = useNavigate()

    const goToCheckout = (e : MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        navigate('/checkout')
        dispatch(setIsCartOpen(false))
    }
    
    return (
        <CartDropdownContainer>
            <CartItemsContainer >
                {cartItems.length? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                  : <EmptyMessage className='empty-message'>Your cart is empty</EmptyMessage>  }
            </CartItemsContainer>
                <Button onClick = { goToCheckout }>Go To Checkout</Button>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown;