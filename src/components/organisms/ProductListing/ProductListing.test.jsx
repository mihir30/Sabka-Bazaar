import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDom, { unmountComponentAtNode } from 'react-dom';
import ProductListing from './ProductListing';

describe("Product Listing Component", () => {
    it("should render product listing component", () => {
        const divEl = document.createElement('div');
        ReactDom.render(<BrowserRouter><ProductListing /></BrowserRouter>, divEl);
    });

    let container = null;

    beforeEach(() => {
        // set up a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    it("should fetch product data corectly", async () => {

        render(<BrowserRouter><ProductListing /></BrowserRouter>, container);
        await sleep(500);
    });

    it("should have the right productlisting component snapshot", () => {
        const tree = renderer.create(<BrowserRouter><ProductListing /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();

    });

});