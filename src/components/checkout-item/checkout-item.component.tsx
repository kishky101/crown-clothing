// import { useContext } from 'react';
// import { CartDropdownContext } from '../../context/cart-dropdown.context';
import {FC} from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, cartItemToDelete } from '../../store/cart/cart.action'
import { 
    CheckoutItemContainer,
    CheckoutImageContainer,
    CheckoutImage, 
    Name, 
    Quantity,
    Price,
    Arrow,
    Value,
    CheckoutRemoveButton,
    CheckOutItemDetails,
    CheckOutItemPrice 
} from './checkout-item.styles'
import { CartItemType } from '../../store/cart/cart.types';

type CheckoutItemProp = {
    product: CartItemType
}

const CheckoutItem: FC<CheckoutItemProp> = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    //const { addItemToCart, removeItemFromCart, cartItemToDelete } = cart
    const {title, image, quantity, price } = product


    
    //const { addItemToCart, removeItemFromCart, cartItemToDelete } = useContext(CartDropdownContext)
    
    const deleteHandler = () => dispatch(cartItemToDelete(cartItems, product));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, product)); 
    return (
        <CheckoutItemContainer>
            <CheckOutItemDetails>
                <CheckoutImageContainer>
                    <CheckoutImage src={image} alt={title} />
                </CheckoutImageContainer>
                <Name>{title}</Name>
            </CheckOutItemDetails>
            <CheckOutItemPrice>
                <Quantity>
                    <Arrow onClick={removeItemHandler}>
                        <AiOutlineMinus />
                    </Arrow>
                    <Value>{quantity}</Value>
                    <Arrow onClick={addItemHandler}>
                        <AiOutlinePlus />
                    </Arrow>
                </Quantity>
                <Price>{price * quantity}</Price>
            </CheckOutItemPrice>
            <CheckoutRemoveButton onClick={deleteHandler}>
                <FaTrash fontSize={20} color='#eb5a5a' />
            </CheckoutRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;