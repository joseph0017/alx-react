import React from 'react';
import { shallow } from "enzyme";
import Footer from './Footer';
import { getFullYear, getFooterCopy } from "../utils/utils";

describe('Footer', () => {
    it('renders Footer Component without crashing', () => {
        shallow(<Footer />).exists();
    });
    it('renders Footer Component with Copyright', () => {
        expect(shallow(<Footer />).text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});