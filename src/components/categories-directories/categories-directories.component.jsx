import CategoryItem from '../category-item/category-item.component';

import './categories-directories.styles.scss'

const CategoriesDirectories = ({categories}) => {
    return ( 
        <div className="categories-container">
            {categories.map((category) => {
            return (
                <CategoryItem category = {category} key = {category.id} />
            )
            })}
        </div>
     );
}

export default CategoriesDirectories;