import React from 'react';
import {CartItemContainer, CartItemImage, ItemDetails, ItemName} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
            
        </CartItemContainer>
    )
}

export default CartItem;