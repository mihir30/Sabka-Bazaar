import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AppWideContext } from '../../contexts/AppWideContext';
import { Button } from '../../atoms';
import CartItemCounter from './CartItemCounter';

describe("Cart Item Counter Component", () => {
    it('renders the component properly and should display the proper initial count in the cart item counter component', () => {
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={1} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("item-count")).toHaveTextContent(1);
    });

    it('should increment when + is clicked', () => {
        const editItem = jest.fn();
        render(<Button
            buttonType={"cart-qty"}
            children={"+"}
            type={"button"}
            method={() => editItem()}
            disabled={50 === 2}
          />);
        const buttonElement = screen.getByRole("button", { name: "+" });
        fireEvent.click(buttonElement);
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={2} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("item-count")).toHaveTextContent(2);
    });

    it('should decrement when - is clicked', () => {
        const removeItem = jest.fn();
        render(<Button
            buttonType={"cart-qty"}
            children={"-"}
            type={"button"}
            method={() => removeItem()}
          />);
        const buttonElement = screen.getByRole("button", { name: "-" });
        fireEvent.click(buttonElement);
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={1} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("item-count")).toHaveTextContent(1);
    });

    it('should display X', () => {
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={1} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("item-multiply")).toHaveTextContent("X");
    });

    it('should display price of product added to cart', () => {
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={1} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("price")).toHaveTextContent("187");

    });

    it('should display total item price', () => {
        render(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={3} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("total-price")).toHaveTextContent("561");
    })

    it('should have the right cart item component snapshot', () => {
        const tree = renderer.create(<AppWideContext.Provider value={dispatchEvent}><BrowserRouter><CartItemCounter quantity={1} price={187} stock={50} id={"5b6c6aeb01a7c38429530884"}/></BrowserRouter></AppWideContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

