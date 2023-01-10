import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.util";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);


    const signOutHandler = async () => {
        await signOutUser();
    }

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
  