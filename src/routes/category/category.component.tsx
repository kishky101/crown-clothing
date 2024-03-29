import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
//import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/products-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {CategoryContainer, CategoryTitle} from './category.styles';

type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    //const { categoriesMap } = useContext(CategoriesContext);
    //const categoriesMap = useSelector(SelectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    //const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        //setProducts(categoriesMap[category])
    }, [category,])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                // isLoading? (<Spinner />
                // ) : (
                //     <CategoryContainer>
                //         {products &&
                //             products.map(product => (
                //                 <ProductCard key={product.id} product={product} />
                //             ))
                //         }
                //     </CategoryContainer>
                // )
            }
            
        </>
        
    )
}

export default Category;