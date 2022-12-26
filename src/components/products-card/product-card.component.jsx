import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import {ProductCartContainer, Footer, Name, Price} from './product-card.styles'

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product

    const { addItemToCart } = useContext(CartDropdownContext);
    const addProductToCart = () => addItemToCart(product)
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