import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { fetchCategoriesAsync } from "../../store/categories/categories.action.js";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import ProductDetails from "../../components/product-details/product-details.component";

const Shop = () => {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     const getCategoryMap = async () => {
    //         const categoryMap = await getCategoriesAndDocuments();
    //         dispatch(setCategoriesMap(categoryMap))
    //     }

    //     getCategoryMap()
    // }, [])


    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchCategoriesStart());
    // }, [])

    return (
        <Routes>
            <Route index element= {<CategoriesPreview />} />
            <Route path=":category" element= {<Category />} />
            {/* <Route path=":id" element= {<ProductDetails />} /> */}
        </Routes>
    )
}

export default Shop;