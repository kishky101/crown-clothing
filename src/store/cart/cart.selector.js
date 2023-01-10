import { createSelector } from "reselect"

export const selectCartReducer = (state) => state.cart

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
) 

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
) 

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => {
       return cartItems.reduce((total, cartItem) => cartItem.quantity + total , 0);
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0)
    }
)