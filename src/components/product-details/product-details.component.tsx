import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";
import { ProductType } from "../product-card/product-card.component";
import {
  ProductDetailsCont,
  ProductDetailsBox,
  ProductDetailsImage,
  ProductDetailsDesc,
  ProductDetailsText,
  ProductDetailsRating,
  ProductDetailsButtons,
  ProductDetailsQuant,
  ProductContainer
} from "./product-details.styles";
import Button from "../button/button.component";
import Star from "../star/star.component";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { newCategoryItem } from "../../store/categories/categories.types";
import Spinner from "../spinner/spinner.component";
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemType } from "../../store/cart/cart.types";
import ProductCard from "../product-card/product-card.component";

type ProductRouteParam = {
  productId: string;
};


const ProductDetails: React.FC<ProductType> = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<newCategoryItem>({
    id: 0,
    image: "",
    description: "",
    title: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    category: "",
  });
  // console.log(product)
  const { productId } = useParams<ProductRouteParam>();
  const products = useSelector(selectCategories);
  const cartItems = useSelector(selectCartItems);
  // debugger
  // const { image, description, title, price, rating } = product;

  const addItemHandler = () => dispatch(addItemToCart(cartItems, product as unknown as CartItemType));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, product as unknown as CartItemType));

  const buyNowHandler = () => {
    addItemHandler();
    navigate('/checkout')
  }
  useEffect(() => {
    const filterProduct = products.filter(
      (product) => product.id === Number(productId)
    );
    setProduct(filterProduct[0]);
  }, [productId, product, products]);



  if(!product) {
    return <Spinner />
  }

  const filteredCart = cartItems.filter(item => item.id === product.id);


  return (
    <ProductDetailsCont>
      <p style={{marginLeft: '50px', fontSize: '30px', textTransform: 'capitalize'}}>{product.category}</p>
      <ProductDetailsBox>
        <div>
          <ProductDetailsRating>
            <h4>{product.title}</h4>
            <div style={{display: 'flex', gap: '10px'}}>
              {product.rating.rate}{" "}
              <span>
                <Star rate={product.rating.rate} />
              </span>{" "}
              <span style={{ color: "rgb(0,129,326)" }}>
                {product.rating.count} ratings
              </span>
            </div>
          </ProductDetailsRating>
          <ProductDetailsImage>
            <img src={product.image} alt={product.title} />
          </ProductDetailsImage>
        </div>
        <ProductDetailsDesc>
          <ProductDetailsText>
            <p
              style={{
                fontFamily: "Consolas",
                fontSize: "50px",
                color: "rgb(0,129,326)",
              }}
            >
              ${product.price}
            </p>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <ProductDetailsQuant>
              <span onClick={removeItemHandler}>
                <AiOutlineMinus fontSize={20} />
              </span>
              <p>{(filteredCart[0] && filteredCart[0].quantity) || 0}</p>
              <span onClick={addItemHandler}>
                <AiOutlinePlus fontSize={20} />
              </span>
            </ProductDetailsQuant>
            <ProductDetailsButtons>
              <Button onClick={buyNowHandler}>Buy now</Button>
              <Button onClick={addItemHandler}>Add to Cart</Button>
            </ProductDetailsButtons>
          </ProductDetailsText>
        </ProductDetailsDesc>
      </ProductDetailsBox>
      <h3>Checkout Similar items</h3>
      <ProductContainer >
        {products.length && products.filter(item => item.category === product.category).map(product => (
          <ProductCard key={product.id} product={product} />
        )) 
        }
      </ProductContainer>
    </ProductDetailsCont>
  );
};

export default ProductDetails;
