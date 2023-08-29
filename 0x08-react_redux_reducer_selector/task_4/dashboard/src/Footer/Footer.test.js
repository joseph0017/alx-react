/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

describe('Footer', () => {
  it('renders Footer Component without crashing', () => {
    shallow(<Footer />).exists();
  });
  it('renders Footer Component with Copyright', () => {
    expect(shallow(<Footer />).text()).toBe(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });

  // it('test to verify that the link is not displayed when the user is logged out within the context', () => {
  //   const usercontext = {
  //     user: {
  //       email: '',
  //       password: '',
  //       isLoggedIn: false
  //     },
  //     logout: jest.fn()
  //   }

  //   const wrapper = mount(
  //     <AppContext.Provider value={usercontext}>
  //       <Footer />
  //     </AppContext.Provider>
  //   )

//   expect(wrapper.find('a').exists()).toBe(false)
//   wrapper.unmount()
// })
});
