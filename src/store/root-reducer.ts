import { combineReducers } from "redux";
import { CartReducer } from "./cart/cart.reducer";
import { CategoriesReducer } from "./categories/categories.reducer";

import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    cart: CartReducer
})