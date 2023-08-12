import React from 'react';
import { useSelector } from 'react-redux';

import { selectCategories } from '../../store/categories/categories.selector';

import Directories from '../../components/directories/directories.component';
import { Outlet } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContainer } from './home.styles';

const box = {category: "men's clothing",
description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
id:1,
image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
price:109.95,
rating:{rate: 3.9, count: 120},
title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

const Home = () => {
  const products = useSelector(selectCategories);
 
  return (
    <div>
        {/* <Directories /> */}
        <Outlet />
        {/* <ProductCard product={box}/> */}
        <ProductContainer>
          {
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </ProductContainer>
    </div>
    
      
  );
}

export default Home;