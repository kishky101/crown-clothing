//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
//import { useContext } from 'react'
//import { CartDropdownContext } from '../../context/cart-dropdown.context'


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import {CartIconContainer, ItemCount, ShoppingIconBag} from './cart-icon.styles'


const CartIcon = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
   //const { cartCount } = useContext(CartDropdownContext)

    const cartIconOnClick = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={cartIconOnClick}>
            <ShoppingIconBag />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;