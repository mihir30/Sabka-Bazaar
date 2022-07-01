import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AppWideContext } from '../../contexts/AppWideContext';
import Cart from './Cart';
import { Button } from '../../atoms';

describe("Cart Header Component", () => {
    it('renders the component properly and should display the proper initial count in the cart header component', () => {
        render(<AppWideContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Cart /></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("count-items")).toHaveTextContent('0 items');
    });

    it('should update the count in cart header component', () => {
        const cartCount = 0;
        const addItemToCart = jest.fn();
        render(<Button buttonType="BuyNow"
        children="Buy Now"
        method={() => addItemToCart()}
        data-testid="add-to-cart"></Button>);
        const buttonElement = screen.getByRole("button", { name: /Buy Now/i });
        fireEvent.click(buttonElement);
        render(<AppWideContext.Provider value={{ cartItems: { count: cartCount+1 } }}><BrowserRouter><Cart /></BrowserRouter></AppWideContext.Provider>);
        expect(screen.getByTestId("count-items")).toHaveTextContent('1 item');

    });

    it('should have the right cart header component snapshot', () => {
        const tree = renderer.create(<AppWideContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Cart /></BrowserRouter></AppWideContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});