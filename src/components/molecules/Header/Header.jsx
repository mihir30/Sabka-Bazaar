import React from "react";
import "./Header.scss";
import logo from "../../../static/images/logo.png";
import Cart from "../Cart/Cart";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image } from "../../atoms";
import useForm from "../../../validations/validateRegister";
import HamBurgerMenu from "./HamburgerMenu/HamBurgerMenu";

const Header = () => {
  const { getEmail, removeEmail } = useForm();
  const location = useLocation();
  let searchQuery = location.pathname;
  let data = <div></div>;
  let logout = <div></div>;
  if (getEmail() === null) {
    data = <div></div>;
  } else {
    if (searchQuery === "/login") {
      data = <div></div>;
      logout = <div></div>;
      removeEmail();
    } else if (searchQuery === "/register") {
      data = <div></div>;
      logout = <div></div>;
      removeEmail();
    } else {
      data = (
        <div>
          Hello, <span className="header-email">{getEmail()}</span>
        </div>
      );
      logout = (
        <Link to="/login" className="nav-login-links links">
          Logout
        </Link>
      );
    }
  }

  return (
    <header className="header" aria-label="header">
      <div className="header-box">
      <section className="wrapper">
          <HamBurgerMenu />
        </section>
        <Link to="/">
          <Image alt="sabka bazaar" source={logo} className="logo" />
        </Link>
        
        <nav className="header-nav">
          <Link to="/" className="nav-links links">
            Home
          </Link>
          <Link to="/products/" className="nav-links links">
            Products
          </Link>
        </nav>
        <div className="hello-message-wrapper">
          <span className="hello-message">{data}</span>
          <div className="header-nav-wrapper">
            <nav className="header-nav-login">
              <Link to="/login" className="nav-login-links links">
                SignIn
              </Link>
              <Link to="/register" className="nav-login-links links">
                Register
              </Link>
              {logout}
            </nav>

            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
