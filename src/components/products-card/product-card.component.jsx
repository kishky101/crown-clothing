// import { useContext } from 'react';
// import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {ProductCartContainer, Footer, Name, Price} from './product-card.styles'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {name, imageUrl, price} = product
    const cartItems = useSelector(selectCartItems)
    //const { addItemToCart } = useContext(CartDropdownContext);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt = {`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonTypes={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart} >Add to Cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard