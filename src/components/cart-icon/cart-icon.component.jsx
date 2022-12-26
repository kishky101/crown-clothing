//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cart-dropdown.context'

import {CartIconContainer, ItemCount, ShoppingIconBag} from './cart-icon.styles'


const CartIcon = () => {

    const {cartDropdown, setCartDropdown, cartCount } = useContext(CartDropdownContext)

    const cartIconOnClick = () => {
        setCartDropdown(!cartDropdown);
    }

    return (
        <CartIconContainer onClick={cartIconOnClick}>
            <ShoppingIconBag />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;