import react from "react";
import { Link } from "react-router-dom";

import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import "./header.component.scss";


//<Link> is actually an "a tag" so we style it in App.css as such, could have also targeted className of "option" though 
const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
        <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="/shop">
            CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
    </div>
  </div>
);

export default Header;