import React, { useContext } from "react";
import { Button } from "../../atoms";
import { AppWideContext } from "../../contexts/AppWideContext";
import "./CartItemCounter.scss";
const CartItemCounter = ({ quantity, price, id, stock }) => {
  const { dispatch } = useContext(AppWideContext);

  const editItem = () => {
    dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const totalItemPrice = quantity * price;
  return (
    <div>
      <Button
        buttonType={"cart-qty"}
        children={"-"}
        type={"button"}
        method={() => removeItem()}
      />
      <span className="item-quantity" data-testid="item-count">{quantity}</span>
      <Button
        buttonType={"cart-qty"}
        children={"+"}
        type={"button"}
        method={() => editItem()}
        disabled={stock === quantity}
      />
      <span className="item-price-multiply" data-testid="item-multiply">X </span>
      <span className="item-price" data-testid="price">{`Rs.${price}`}</span>
      <span className="item-total-price" data-testid="total-price"> {`Rs.${totalItemPrice}`}</span>
    </div>
  );
};

export default CartItemCounter;
