import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AppWideContextProvider from './AppWideContext';

describe("App wide context provider component", () => {
    it('renders the component properly', () => {
        render(<AppWideContextProvider/>);
    });

    it('should have the right app wide context provider component snapshot', () => {
        const tree = renderer.create(<AppWideContextProvider/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});