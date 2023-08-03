import React from 'react'
import { shallow } from "enzyme";
import Login from './Login';

describe('Login component', () => {
    it('renders Login component without crashing', () => {
        shallow(<Login />).exists();
    })

    it('renders 2 inputs and 2 label tags in the Login component', () => {
            expect(shallow(<Login />).find('input').length).toBe(2);
            expect(shallow(<Login />).find('label').length).toBe(2);
    })
});