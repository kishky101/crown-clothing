//import { useContext } from 'react'
//import { CategoriesContext } from '../../context/categories.context'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/category-preview.components'
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategories)
    const isLoading = useSelector(selectCategoriesIsLoading)
    //console.log(categoriesMap)

    //const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {/* { isLoading? <Spinner/> :
                Object.keys(categoriesMap).map(title => {
                    //const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                }
                    
                )
            } */}
        </>
        
    )
}

export default CategoriesPreview;