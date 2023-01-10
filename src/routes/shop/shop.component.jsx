import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { setCategoriesMap } from "../../store/categories/categories.action";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap))
        }

        getCategoryMap()
    }, [])


    return (
        <Routes>
            <Route index element= {<CategoriesPreview />} />
            <Route path=":category" element= {<Category />} />
        </Routes>
    )
}

export default Shop;