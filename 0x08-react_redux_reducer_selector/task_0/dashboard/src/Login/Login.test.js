import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Login component', () => {
  it('renders Login component without crashing', () => {
    shallow(<Login />).exists();
  });

  it('renders 2 inputs and 2 label tags in the Login component', () => {
    expect(shallow(<Login />).find('input').length).toBe(3);
    expect(shallow(<Login />).find('label').length).toBe(2);
  });

  it('Add a test to verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
  });

  it('Add a test to verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);

    wrapper.find('#email').simulate('change', {target: {value: 'joseph@gmail.com'}});
    wrapper.find('#password').simulate('change', {target: {value: 'Bankai!'}});

    expect(wrapper.find('input').at(2).prop('disabled')).toBe(false);
  });
});
