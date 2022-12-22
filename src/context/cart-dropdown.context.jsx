import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    cartDropdown: false,
    setCartDropdown: () => false
});

export const CartDropdownProvider = ({children}) => {
    const [cartDropdown, setCartDropdown] = useState(false);
    const value = {cartDropdown, setCartDropdown}
    return (
        <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
    )
}