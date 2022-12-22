import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartDropdownContext } from '../../context/cart-dropdown.context';
import { signOutUser } from "../../utils/firebase/firebase.util";

import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
  
    const { cartDropdown } = useContext(CartDropdownContext);


    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='Shop'>
                    SHOP
                </Link>
                {currentUser? 
                    <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>:
                    (
                        <Link className="nav-link" to='authentication'>
                            SIGN IN
                        </Link>
                    )
                }
                  <CartIcon />
            </div>
          {cartDropdown && <CartDropdown />}
        </div>
        <Outlet />
      </>
      )
  }

export default Navigation;
  