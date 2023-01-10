import {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/products-card/product-card.component';

import {CategoryContainer, CategoryTitle} from './category.styles';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </>
        
    )
}

export default Category;