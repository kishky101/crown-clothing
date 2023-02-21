import { createAction, ActionWithPayload, withMatch } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

import { CategoryItem } from "../categories/categories.types";
import { CartItemType } from "./cart.types";


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>



const addCartItem = (cartItems: CartItemType[], productToAdd: CategoryItem): CartItemType[] => {

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

const removeCartItem = (cartItems: CartItemType[], productToRemove: CartItemType): CartItemType[] => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id )
    }

    return cartItems.map(cartItem => {
        return cartItem.id === productToRemove.id?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    })
}


const deleteCartItem = (cartItems: CartItemType[], productToDelete: CartItemType): CartItemType[] => cartItems.filter(cartItem => cartItem.id !== productToDelete.id)

export const setCartItems = withMatch((cartItems: CartItemType[]) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItemType[], productToAdd: CartItemType): SetCartItems => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItemType[], productToRemove: CartItemType): SetCartItems => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return setCartItems(newCartItems)
}

export const cartItemToDelete = (cartItems: CartItemType[], productToDelete: CartItemType): SetCartItems => {
    const newCartItems = deleteCartItem(cartItems, productToDelete)
    return setCartItems(newCartItems)
}

export const setIsCartOpen = withMatch((boolean: boolean): SetIsCartOpen => 
    createAction(CART_ACTION_TYPES.IS_CART_OPEN, boolean))
