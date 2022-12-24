import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({product}) => {


    const {name, imageUrl, quantity, price } = product
    
    const { addItemToCart, removeItemFromCart, cartItemToDelete } = useContext(CartDropdownContext)
    
    const deleteHandler = () => cartItemToDelete(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product); 
    return (
        <div className = 'checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className='price'>{price * quantity}</span>
            <div className='remove-button' onClick={deleteHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;