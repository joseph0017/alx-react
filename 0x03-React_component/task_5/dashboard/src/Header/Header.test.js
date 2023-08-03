import React from 'react'
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
    it('Header renders without crashing' , () => {
        expect(shallow(<Header />).exists())
    })

    it('checks if img and h1 content exits', () => {
        expect(shallow(<Header />).exists('img')).toBe(true);
        expect(shallow(<Header />).containsMatchingElement(<h1>School dashboard</h1>)).toBe(true);
    })
})