import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppWideContext } from '../../contexts/AppWideContext';
import renderer from 'react-test-renderer';
import ImageSource from '../../../ImageSource';
describe("Cart Segment Component", () => {
    it('renders the item image source component properly', () => {

        render(<AppWideContext.Provider value={{
            cartItems: {
                count: 1, products: {
                    id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
                    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
                    quantity: 1,
                }
            }
        }}><BrowserRouter><ImageSource alt={"Image of Fresho Kiwi - Green, 3 pcs"} className="image-size-1" source={"./static/images/products/fruit-n-veg/kiwi-green.jpg"} /></BrowserRouter></AppWideContext.Provider>);
        screen.getByAltText("Image of Fresho Kiwi - Green, 3 pcs")


    });


    it('renders the lowest price image source component properly', () => {

        render(<AppWideContext.Provider value={{
            cartItems: {
                count: 1, products: {
                    id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
                    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
                    quantity: 1,
                }
            }
        }}><BrowserRouter><ImageSource alt="lowest-price" source={"./static/images/lowest-price.png"} className="image-size-2" /></BrowserRouter></AppWideContext.Provider>);
        screen.getByAltText("lowest-price")


    });


    it('should have the right cart item image component snapshot', () => {
        const tree = renderer.create(<AppWideContext.Provider value={{
            cartItems: {
                count: 1, products: {
                    id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
                    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
                    quantity: 1,
                }
            }
        }}><BrowserRouter><ImageSource alt={"Image of Fresho Kiwi - Green, 3 pcs"} className="image-size-1" source={"./static/images/products/fruit-n-veg/kiwi-green.jpg"} /></BrowserRouter></AppWideContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have the right lowest price image component snapshot', () => {
        const tree = renderer.create(<AppWideContext.Provider value={{
            cartItems: {
                count: 1, products: {
                    id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
                    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
                    quantity: 1,
                }
            }
        }}><BrowserRouter><ImageSource alt="lowest-price" source={"./static/images/lowest-price.png"} className="image-size-2" /></BrowserRouter></AppWideContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });


});