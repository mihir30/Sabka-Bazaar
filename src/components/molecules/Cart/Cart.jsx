import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "../../atoms";
import { CartSegment } from "../../organisms";
import cart from "../../../static/images/cart.svg";
import { AppWideContext } from "../../contexts/AppWideContext";
import "./Cart.scss";
const Cart = () => {
  const cartModalOverlay = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const {
    cartItems: { count },
  } = useContext(AppWideContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;
  const setMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", setMedia);
    return () => window.removeEventListener("resize", setMedia);
  });

  const handleCartClick = () => {
    if (cartModalOverlay.current.style.display === "none") {
      cartModalOverlay.current.style.display = "block";
    } else {
      cartModalOverlay.current.style.display = "none";
    }
  };

  const handleCloseBtn = () => {
    cartModalOverlay.current.style.display = "none";
  };

  return (
    <>
      {isDesktop ? (
        <>
          <div className="cart-btn">
            <Button
              type="button"
              buttonType="cart-button"
              method={handleCartClick}
            >
              <Image source={cart} alt="cart" className="cart" />
              <span className="cart-quantity" data-testid="count-items">{countItems}</span>
            </Button>
          </div>
          <div className="cart-modal-overlay" ref={cartModalOverlay}>
            <div className="cart-modal">
              <CartSegment closeBtnMethod={handleCloseBtn} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cart-btn">
            <Link to="/cartItems" className="nav-cart-items">
              <Button
                type="button"
                buttonType="cart-button"
                method={handleCartClick}
              >
                <Image source={cart} alt="cart" className="cart" />
                <span className="cart-quantity" data-testid="count-items">{countItems}</span>
              </Button>
            </Link>
          </div>
          <div className="cart-modal-overlay" ref={cartModalOverlay}>
            <div className="cart-modal">
              <CartSegment closeBtnMethod={handleCloseBtn} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
