import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import {
    CheckoutItemContainer,
    CheckoutImageContainer,
    CheckoutImage, 
    Name, 
    Quantity,
    Price,
    Arrow,
    Value,
    CheckoutRemoveButton 
} from './checkout-item.styles'

const CheckoutItem = ({product}) => {


    const {name, imageUrl, quantity, price } = product
    
    const { addItemToCart, removeItemFromCart, cartItemToDelete } = useContext(CartDropdownContext)
    
    const deleteHandler = () => cartItemToDelete(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemFromCart(product); 
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={imageUrl} alt={name} />
            </CheckoutImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price * quantity}</Price>
            <CheckoutRemoveButton onClick={deleteHandler}>&#10005;</CheckoutRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;