import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { newCategoryItem } from "../../store/categories/categories.types";
import addToCartIcon from '../../assets/add-to-cart.png'

import { ProductCardBox, ProductImage, ProductDetails } from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemType } from "../../store/cart/cart.types";
// export type newCategoryItem = {
//     category: string;
//     description: string;
//     id: number;
//     image: string;
//     price: number;
//     title: string;
//     rating: { rate: number; count: number };
//   };

// type ProductCardProps = Pick<newCategoryItem, 'id' | 'image' | 'price' | 'title' >
export type ProductType = {
    product: newCategoryItem
}

const ProductCard: React.FC<ProductType> = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const {id, image, price, title} = product;

    const addItemHandler = () => dispatch(addItemToCart(cartItems, product as unknown as CartItemType));

    const onClickHandler = () => navigate(`/${id}`);
    return (
        <ProductCardBox onClick={onClickHandler}>
            <ProductImage>
                <img src={image} alt="bag" />
            </ProductImage>
            <ProductDetails>
                <div>
                    <p>$ {price}</p>
                    <span onClick={(e) => {
                        addItemHandler();
                        e.stopPropagation();
                        }}>
                        <img src={addToCartIcon} alt='add to cart icon '/>
                    </span>
                </div>
                <h4>{title}</h4>
            </ProductDetails>
        </ProductCardBox>
    )
}

export default ProductCard;


// const box = {category: "men's clothing",
// description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// id:1,
// image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// price:109.95,
// rating:{rate: 3.9, count: 120},
// title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
