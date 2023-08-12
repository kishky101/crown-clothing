import {FC, memo} from 'react';
import {CartItemContainer, CartItemImage, ItemDetails, ItemName} from './cart-item.styles'
import { CartItemType } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: CartItemType;
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
    const {title, image, price, quantity} = cartItem

    return (
        <CartItemContainer>
            <CartItemImage src={image} alt={title} />
            <ItemDetails>
                <ItemName>{title}</ItemName>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
            
        </CartItemContainer>
    )
})

export default CartItem;