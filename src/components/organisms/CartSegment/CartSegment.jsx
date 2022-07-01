import React, { useContext, useEffect, useState } from "react";
import EmptyCart from "../EmptyCart/EmptyCart";
import { Button } from "../../atoms";
import { AppWideContext } from "../../contexts/AppWideContext";
import { CartItemCounter } from "../../molecules";
import "./CartSegment.scss";
import { useNavigate } from "react-router-dom";
import ImageSource from "../../../ImageSource";
const CartSegment = ({ closeBtnMethod }) => {
  const pageURL = window.location.href;
  let extractCategoryID = pageURL.split("/products/")[1];

  const navigate = useNavigate();
  const {
    cartItems: { count, products = {} },
  } = useContext(AppWideContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    
    setTotalAmount(
      Object.values(products).reduce(
        (totalAmt, current) => totalAmt + current.quantity * current.price,
        0
      )
    );
  }, [products]);

  const goToProducts = () => {
    if (extractCategoryID) navigate(`/products/${extractCategoryID}`);
    else navigate(`/products/`);
    closeBtnMethod();
  };
  return (
    <>
      {`${count}` > 0 ? (
        <div className="minicart-modal-background">
          <div className="minicart">
            <div className="cart-quantity-tile">
              <p>
                <strong>My Cart </strong>
              </p>
              <p className="cart-count" data-testid="item-count">({countItems})</p>
            </div>

            <div className="cart-quantity-tile-modal">
              <p>
                <strong>My Cart </strong>
              </p>
              <p className="cart-count" data-testid="item-count">({countItems})</p>
              <i
                id="close-btn"
                className="fas fa-times"
                onClick={closeBtnMethod}
              ></i>
            </div>
            {Object.values(products).map((product) => {
              return (
                <div className="cart-items-tile">
                  <div className="cart-item-img" data-testid="item-image">
                    <ImageSource
                      source={product?.imageUrl}
                      alt={`Image of ${product?.name}`}
                      className="image-size-1"
                    />
                  </div>

                  <div className="cart-item-features">
                    <strong>{product?.name}</strong>
                    <CartItemCounter
                      id={product?.id}
                      quantity={product?.quantity}
                      price={product?.price}
                      stock={product?.stock}
                    />
                  </div>
                </div>
              );
            })}

            <div className="lowest-price-tile">
              <div className="lowest-price-img"  data-testid="lowest-price-image">
                <ImageSource
                  alt="lowest-price"
                  source={"./static/images/lowest-price.png"}
                  className="image-size-2"
                />
              </div>
              <div className="lowest-price-text" data-testid="lowest-price-text" >
                You won't find it cheaper anywhere
              </div>
            </div>

            <div className="checkout-tile">
              <div className="promo-code-text">
                Promo code can be applied on payment page
              </div>

              <div >
                <Button buttonType={"checkout"} method={goToProducts}>
                  <span className="checkout-btn">
                    <span>Proceed to Checkout</span>
                    <span>{`Rs. ${totalAmount}`} &#10095;</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart
          closeBtnMethod={closeBtnMethod}
          goToProducts={goToProducts}
        />
      )}
    </>
  );
};

export default CartSegment;
