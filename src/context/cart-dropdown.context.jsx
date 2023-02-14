import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";


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
    cartTotal: 0
});

export const CART_REDUCER_TYPES = {
    OPEN_CART_DROPDOWN: 'OPEN_CART_DROPDOWN',
    SET_CART_iTEMS: 'SET_CART_iTEMS',
}

export const CartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_REDUCER_TYPES.OPEN_CART_DROPDOWN:
            return {
                ...state,
                cartDropdown: payload
            }
        case CART_REDUCER_TYPES.SET_CART_iTEMS:
            return {
                ...state,
                ...payload
            }
        
        default:
            throw new Error(`unhandled type ${type} in cart reducer`)
    }
}

export const INITIAL_STATE = {
    cartDropdown: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartDropdownProvider = ({children}) => {
    // const [cartDropdown, setCartDropdown] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0)

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const {cartDropdown, cartItems, cartCount, cartTotal} = state;

    const updateNewCartItems = (newCartItems) => {
        const cartCountTotal = newCartItems.reduce((total, cartItem) => cartItem.quantity + total , 0);
        
        const totalPrice = newCartItems.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0);

        dispatch(
            createAction(
                CART_REDUCER_TYPES.SET_CART_iTEMS, 
                {
                    cartItems: newCartItems,
                    cartCount: cartCountTotal,
                    cartTotal: totalPrice
                }
            )
           )
    }

    const setCartDropdown = (boolean) => {
        dispatch(
            createAction(CART_REDUCER_TYPES.OPEN_CART_DROPDOWN, boolean)
        )
    }
    // const setCartItems = (cartItems) => {
    //     dispatch({type: CART_REDUCER_TYPES.SET_CART_iTEMS, payload: cartItems})
    // }
    // const setCartCount = (count) => {
    //     dispatch({type: CART_REDUCER_TYPES.CART_COUNT, payload: count})
    // }
    // const setCartTotal = (total) => {
    //     dispatch({type: CART_REDUCER_TYPES.CART_TOTAL, payload: total})
    // }
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateNewCartItems(newCartItems)
    }
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateNewCartItems(newCartItems)
    }

    const cartItemToDelete = (productToDelete) => {
        const newCartItems = deleteCartItem(cartItems, productToDelete)
        updateNewCartItems(newCartItems)
    }

    
    // useEffect(() => {
    //     const cartCountTotal = cartItems.reduce((total, cartItem) => cartItem.quantity + total , 0);
    //     setCartCount(cartCountTotal)
    // }, [cartItems]);

    // useEffect(() => {
    //     const totalPrice = cartItems.reduce((total, cartItem) => (cartItem.price * cartItem.quantity) + total, 0)
    //     setCartTotal(totalPrice)
    // }, [cartItems])

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