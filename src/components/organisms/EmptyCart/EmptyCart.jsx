import React from "react";
import { Button } from "../../atoms";
import "./EmptyCart.scss";
const EmptyCart = ({ closeBtnMethod, goToProducts }) => {
  return (
    <div className="minicart-modal-background">
      <div className="minicart-empty">
        <div className="cart-quantity-tile" >
          <p>
            <strong data-testid="my-cart-text">My Cart </strong>
          </p>
        </div>

        <div className="cart-quantity-tile-modal"  >
          <p>
            <strong data-testid="my-cart-text-modal">My Cart </strong>
          </p>

          <i
            id="close-btn-empty-cart"
            className="fas fa-times"
            onClick={closeBtnMethod}
          ></i>
        </div>

        <div>
          <p className="empty-cart-text" data-testid="no-items">No items in your cart</p>
          <p className="empty-cart-desc" data-testid="fav-items">
            Your favourite items are just a click away
          </p>
        </div>

        <div className="checkout-empty-tile">
          <div>
            <Button data-testid="start-shopping-button" buttonType={"checkout"} method={goToProducts}>
              <span className="start-shopping-btn">
                <span>Start Shopping</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
