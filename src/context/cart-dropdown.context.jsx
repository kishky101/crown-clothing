import { createContext, useState, useEffect } from "react";

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

export const CartDropdownContext = createContext({
    cartDropdown: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartItemToDelete: () => {},
    cartCount: 0,
    cartTotal: 0,
    quantity: 1
});

export const CartDropdownProvider = ({children}) => {
    const [cartDropdown, setCartDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const cartItemToDelete = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    
    useEffect(() => {
        const cartCountTotal = cartItems.reduce((total, cartItem) => cartItem.quantity + total , 0);
        setCartCount(cartCountTotal)
    }, [cartItems]);

    useEffect(() => {
        const totalPrice = cartItems.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0)
        setCartTotal(totalPrice)
    }, [cartItems])

    const value = {
        cartDropdown, 
        setCartDropdown, 
        cartItems, 
        addItemToCart, 
        removeItemFromCart,
        cartItemToDelete, 
        cartCount, 
        cartTotal
    }

    return (
        <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
    )
}