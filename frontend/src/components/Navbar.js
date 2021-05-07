import "./Navbar.css";
//import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './../redux/actions/userActions';
import ip_nav from '../ip_nav.jpeg';


const Navbar = ({ click }) => {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  //signout handler 
  const dispatch = useDispatch();
  const signoutHandler = () => {
      dispatch(signout());
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#"><img src={ip_nav} alt="InnerPieces" /></a>
      </div>

      <ul className="navbar__links">
      <li>
        <Link to="/bookApp">Appointment</Link>
        </li>
        <li>
        <Link to="/bookApp">Blogs</Link>
        </li>
        <li>
        <Link to="/bookApp">Playlist</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          {
            userInfo 
                ? (
                    <div className='dropdown temp'>
                        <Link to="#">
                            { userInfo.name } 
                            <i className="fa fa-caret-down"></i>{ ' ' }
                        </Link> 
                        <ul className='dropdown-content'>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/orderhistory">Orders</Link>
                            </li>
                            <li>
                                <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                    
                )
                : <Link to='/signin'>Sign In</Link>
        }
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
