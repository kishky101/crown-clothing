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


export const CartDropdownContext = createContext({
    cartDropdown: false,
    setCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartDropdownProvider = ({children}) => {
    const [cartDropdown, setCartDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const cartCountTotal = cartItems.reduce((total, cartItem) => cartItem.quantity + total , 0);
        setCartCount(cartCountTotal)
    }, [cartItems])

    const value = {cartDropdown, setCartDropdown, cartItems, addItemToCart, cartCount }

    return (
        <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
    )
}