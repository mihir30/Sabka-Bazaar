import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from './SideBar';

it ("Checking test for SideBar", () => {
    const tree = renderer.create(<SideBar />).toJSON();
    expect(tree).toMatchSnapshot();
});