import { useContext } from 'react';
import { CartDropdownContext } from '../../context/cart-dropdown.context';

import Button from '../button/button.component'

import './product-card.styles.scss'

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product

    const { addItemToCart } = useContext(CartDropdownContext);
    const addProductToCart = () => addItemToCart(product)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt = {`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonTypes='inverted' onClick= {addProductToCart} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard