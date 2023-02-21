import {FC} from 'react';
import { CategoryItem } from '../../store/categories/categories.types';
import ProductCard from '../products-card/product-card.component';


import {CategoryPreviewContainer, CategoryPreviewTitle, Preview} from './category-preview.styles';

type CategoryPreviewProp = {
    title: string;
    products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProp> = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                    <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            <Preview>
                {
                    products.filter((_, idx: number) => idx < 4).map((product) => (
                        <ProductCard key={product.id}  product={product}/>
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;