// import { useContext } from 'react';
// import { CartDropdownContext } from '../../context/cart-dropdown.context';
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
    CheckoutRemoveButton 
} from './checkout-item.styles'

const CheckoutItem = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    //const { addItemToCart, removeItemFromCart, cartItemToDelete } = cart
    const {name, imageUrl, quantity, price } = product


    
    //const { addItemToCart, removeItemFromCart, cartItemToDelete } = useContext(CartDropdownContext)
    
    const deleteHandler = () => dispatch(cartItemToDelete(cartItems, product));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, product)); 
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