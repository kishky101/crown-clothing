import {FC, memo} from 'react';
import {CartItemContainer, CartItemImage, ItemDetails, ItemName} from './cart-item.styles'
import { CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: CartItemType;
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
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
})

export default CartItem;