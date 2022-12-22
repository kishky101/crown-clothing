import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartDropdownContext } from '../../context/cart-dropdown.context'
import './cart-icon.styles.scss'
const CartIcon = () => {

    const {cartDropdown, setCartDropdown } = useContext(CartDropdownContext)

    const cartIconOnClick = () => {
        setCartDropdown(!cartDropdown);
    }

    return (
        <div className='cart-icon-container' onClick={cartIconOnClick}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;