import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import './navigation.styles.scss'

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

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
                
            </div>
        </div>
        <Outlet />
      </>
      )
  }

export default Navigation;
  