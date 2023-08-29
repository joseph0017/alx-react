/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header component', () => {
  it('Header renders without crashing' , () => {
    expect(shallow(<Header />).exists());
  });

  it('checks if img and h1 content exits', () => {
    expect(shallow(<Header />).exists('img')).toBe(true);
    expect(shallow(<Header />).containsMatchingElement(<h1>School dashboard</h1>)).toBe(true);
  });

  // it('Add a test that mounts the Header component with a default context value. Verify that the logoutSection is not created', () => {

  //   const wrapper = mount(
  //     <AppContext.Provider value={user}>
  //       <Header />
  //     </AppContext.Provider>)

  //   expect(wrapper.find('#logoutSection').exists()).toBe(false)
  //   wrapper.unmount()
  // })

  // it('A test that mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', () => {

  //   const userContext = {
  //     user: {
  //       email: 'joe@gmail.com',
  //       password: 'Bleach',
  //       isLoggedIn: true
  //     },
  //     logOut: jest.fn()
  //   }
  //   const wrapper = mount(
  //     <AppContext.Provider value={userContext}>
  //       <Header />
  //     </AppContext.Provider>)

//   expect(wrapper.find('#logoutSection').exists()).toBe(true)
//   wrapper.unmount()
// })
});
