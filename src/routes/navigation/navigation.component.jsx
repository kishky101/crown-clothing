import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { signOutUser } from "../../utils/firebase/firebase.util";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
  
    const { cartDropdown } = useContext(CartDropdownContext);


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
          {cartDropdown && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </>
      )
  }

export default Navigation;
  