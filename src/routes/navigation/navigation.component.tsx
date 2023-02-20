import React from "react";
import { Outlet } from "react-router-dom";
//import { signOutUser } from "../../utils/firebase/firebase.util";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useSelector, useDispatch } from "react-redux";
import { SelectCurrentUser } from "../../store/user/user.selector";
import { userSignOutStart } from "../../store/user/user.action";
//import { useContext } from "react";
//import { UserContext } from "../../context/user.context";
//import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'


const Navigation = () => {

    const currentUser = useSelector(SelectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

   // const { currentUser } = useContext(UserContext);
  
    //const { cartDropdown } = useContext(CartDropdownContext);
    const dispatch = useDispatch()

    const signOutHandler = () => dispatch(userSignOutStart())

    return (
      <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to='Shop'>
                    SHOP
                </NavLink>
                {currentUser? 
                    <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>:
                    (
                        <NavLink to='authentication'>
                            SIGN IN
                        </NavLink>
                    )
                }
                  <CartIcon />
            </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </>
      )
  }

export default Navigation;
  