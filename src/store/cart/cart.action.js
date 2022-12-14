import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";


export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)



const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}  

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id )
    }

    return cartItems.map(cartItem => {
        return cartItem.id === productToRemove.id?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    })
}


const deleteCartItem = (cartItems, productToDelete) => cartItems.filter(cartItem => cartItem.id !== productToDelete.id)


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItem = removeCartItem(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}

export const cartItemToDelete = (cartItems, productToDelete) => {
    const newCartItem = deleteCartItem(cartItems, productToDelete)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem)
}
