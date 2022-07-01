import React, { useContext } from "react";
import "./Product.scss";
import { AppWideContext } from "../../contexts/AppWideContext";
import { Button } from "../../atoms";
import ImageSource from "../../../ImageSource";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Product = ({ name, imageUrl, price, stock, text, id }) => {
  const {
    dispatch,
    cartItems: { products },
  } = useContext(AppWideContext);

  function addItemToCart() {
    if (!products[id]) {
      toast.success(`${name} has been added to your cart`, {
        theme: "light",
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 2500,
      });
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      toast.success(`${name} has been added to your cart again`, {
        theme: "light",
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 2500,
      });
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  }

  return (
    <div className="product" id={`product${id}`}>
      <h2 className="item">{name}</h2>
      <div className="img-desc-btn">
        <div className="image-box">
          <div className={`images${id}`}>
            <ImageSource
              source={imageUrl}
              alt={`Image ${id}`}
              className="product-images"
              id={`thumbnail${id}`}
            />
          </div>
        </div>
        <div className="text-box" data-testid="product-card-component">
          <div className="product-description">{text}</div>
          <div className="price-and-buy-now-btn">
            <h3 className="price" id={`productPrice${id}`}>
              MRP Rs.{price}
            </h3>

            <Button
              buttonType="BuyNow"
              children="Buy Now"
              method={() => addItemToCart()} data-testid="buy-now-btn"
            ></Button>
          </div>
          <div>
            <Button
              buttonType="buynow-tab-phone"
              children={`Buy Now @ MRP Rs.${price}`}
              method={() => addItemToCart()} data-testid="buy-now-btn"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;