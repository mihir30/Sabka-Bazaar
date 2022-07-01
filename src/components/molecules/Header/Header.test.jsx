import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { AppWideContext } from '../../contexts/AppWideContext';
import ReactDom from "react-dom";
import Header from './Header';

describe("Header Component", () => {

    it("should render the component properly", () => {
        const headerEl = document.createElement("header");
        ReactDom.render(<AppWideContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Header/></BrowserRouter></AppWideContext.Provider>, headerEl); 
    });

    it('should have the right header component snapshot', () => {
        const tree = renderer.create(<AppWideContext.Provider value={{ cartItems: { count: 0 } }}><BrowserRouter><Header /></BrowserRouter></AppWideContext.Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});