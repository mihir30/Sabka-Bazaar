import React from 'react';
import renderer from 'react-test-renderer';
import DropDown from './Dropdown';

it ("Checking test for Dropdown", () => {
    const tree = renderer.create(<DropDown />).toJSON();
    expect(tree).toMatchSnapshot();
});