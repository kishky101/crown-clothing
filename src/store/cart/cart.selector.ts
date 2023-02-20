import { createSelector } from "reselect"

import { CartState } from "./cart.reducer";

import { RootState } from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems 
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen 
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems): number => cartItems.reduce(
        (total, cartItem) => cartItem.quantity + total , 0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems): number => cartItems.reduce(
        (total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0)
)




  
