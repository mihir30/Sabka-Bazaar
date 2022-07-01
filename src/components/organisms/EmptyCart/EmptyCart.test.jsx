import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EmptyCart from '../../organisms/EmptyCart/EmptyCart'

describe("Empty Cart Component", () => {
    it('renders the my cart text component properly', () => {
        render(<BrowserRouter><EmptyCart /></BrowserRouter>);
        expect(screen.getByTestId("my-cart-text")).toHaveTextContent('My Cart');
    });

    it('renders the my cart text modal component properly', () => {
        render(<BrowserRouter><EmptyCart /></BrowserRouter>);
        expect(screen.getByTestId("my-cart-text-modal")).toHaveTextContent('My Cart');
    });

    it('renders no items in cart text component properly', () => {
        render(<BrowserRouter><EmptyCart /></BrowserRouter>);
        expect(screen.getByTestId("no-items")).toHaveTextContent('No items in your cart');
    });

    it('renders favourite items in cart text component properly', () => {
        render(<BrowserRouter><EmptyCart /></BrowserRouter>);
        expect(screen.getByTestId("fav-items")).toHaveTextContent('Your favourite items are just a click away');
    });

    it('should have the right empty cart component snapshot', () => {
        const tree = renderer.create(<BrowserRouter><EmptyCart /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});