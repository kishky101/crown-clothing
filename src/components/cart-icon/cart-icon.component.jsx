//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'

import {CartIconContainer, ItemCount, ShoppingIconBag} from './cart-icon.styles'


const CartIcon = () => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)

    const cartCount = useSelector(selectCartCount)

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