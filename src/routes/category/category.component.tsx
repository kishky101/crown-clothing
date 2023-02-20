import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SelectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
//import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/products-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {CategoryContainer, CategoryTitle} from './category.styles';


const Category = () => {
    const { category } = useParams();
    //const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(SelectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading? (<Spinner />
                ) : (
                    <CategoryContainer>
                        {products &&
                            products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </CategoryContainer>
                )
            }
            
        </>
        
    )
}

export default Category;