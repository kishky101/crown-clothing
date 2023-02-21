import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { fetchCategoriesAsync } from "../../store/categories/categories.action.js";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from "../../store/categories/categories.action";

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

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element= {<CategoriesPreview />} />
            <Route path=":category" element= {<Category />} />
        </Routes>
    )
}

export default Shop;