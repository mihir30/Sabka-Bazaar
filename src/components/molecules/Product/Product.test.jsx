import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ImageSource from "../../../ImageSource";
import { AppWideContext } from "../../contexts/AppWideContext";
import Button from '../../atoms/Button/Button';
import Product from "./Product";

describe("Product Component", () => {
  const addItemToCart = jest.fn();
  jest.doMock("../../../ImageSource", () => {
    return {
      __esModule: true,
      // the "default export"
      default: () => <ImageSource source="./static/images/products/fruit-n-veg/kiwi-green.jpg" alt={"Image 5b6c6a7f01a7c38429530883"} className={"product-images"} />
    }
  });

  jest.doMock("../../atoms/Button/Button", () => {
    return {
      __esModule: true,
      // the "default export"
      default: () => {
        <Button
          buttonType="BuyNow"
          children="Buy Now"
          method={() => addItemToCart()} data-testid="buy-now-btn"
        ></Button>
      }
    }
  });

  jest.doMock("../../atoms/Button/Button", () => {
    return {
      __esModule: true,
      // the "default export"
      default: () => {
        <Button
          buttonType="buynow-tab-phone"
          children={`Buy Now @ MRP Rs.87`}
          method={() => addItemToCart()} data-testid="buy-now-btn"
        ></Button>
      }
    }
  });


  it("should render the comp", () => {
    render(<AppWideContext.Provider value={{
      dispatchEvent,
      cartItems: {
        products: {
          id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
          name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
          quantity: 1,
        }
      }
    }}><BrowserRouter><Product id={"5b6c6a7f01a7c38429530883"} imageUrl={"./static/images/products/fruit-n-veg/kiwi-green.jpg"}
      name={"Fresho Kiwi - Green, 3 pcs"} price={87} stock={50} text={"Some dummy text"} /></BrowserRouter></AppWideContext.Provider>)
  });

  it("should give the right product component snapshot", () => {
    const tree = renderer.create(<AppWideContext.Provider value={{
      dispatchEvent,
      cartItems: {
        products: {
          id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
          name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
          quantity: 1,
        }
      }
    }}><BrowserRouter><Product id={"5b6c6a7f01a7c38429530883"} imageUrl={"./static/images/products/fruit-n-veg/kiwi-green.jpg"}
      name={"Fresho Kiwi - Green, 3 pcs"} price={87} stock={50} text={"Some dummy text"} /></BrowserRouter></AppWideContext.Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  })


});