/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { fromJS, Map } from 'immutable';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App component renders without failing', () => {
  it('renders App component', () => {
    shallow(<App />);
  });
  it('renders Notifications component', () => {
    shallow(<Notifications />).exists();
  });
  it('renders Header component', () => {
    shallow(<Header />).exists();
  });
  it('renders Login component', () => {
    shallow(<Login />).exists();
  });
  it('renders Footer component', () => {
    shallow(<Footer />).exists();
  });

  // it(' a test to check that CourseList is not displayed', () => {
  //   const wrapper = shallow(<App isLoggedIn = {false} />)
  //   expect(wrapper.find(CourseList).length).toBe(1)
  //   // wrapper.setProps({isLoggedIn: true})

  //   expect(wrapper.contains(<CourseList />)).toBe(true)
  // })

  // it ('when isLoggedIn is true, the Login component is not rendered but the CourseList is rendered', () => {
  //   const wrapper = shallow(<App isLoggedIn = {true} />)
  //   expect(wrapper.contains(<CourseList />)).toBe(true)
  //   expect(wrapper.contains(<Login />)).toBe(false)
  // })

  it('test to verify that when the keys control and h are pressed the logOut function', () => {
    const logOut = jest.fn();
    const wrapper = shallow(<App logOut={logOut} />);
    const instance = wrapper.instance();

    jest.spyOn(window, 'alert').mockImplementation(() => {
    });
    // testing function handleKeyboardPress
    instance.handleKeyboardPress({ ctrlKey: true, key: 'h' });

    expect(logOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  it('Verify that after calling handleDisplayDrawer, the state should now be true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);

    const instance = wrapper.instance();
    instance.handleDisplayDrawer();

    expect(instance.state.displayDrawer).toBe(true);
  });

  it('verify that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);

    const instance = wrapper.instance();
    instance.handleHideDrawer();

    expect(instance.state.displayDrawer).toBe(false);
  });
});

describe('testing mapToState using redux', () => {
  it(' test that verify that the function returns the right object isLoggedIn: true', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const result = {isLoggedIn: true};
    const mapProps = mapStateToProps(state);
    expect(mapProps).toEqual(result);
  });
  it(' test that verify that the function returns the right object isLoggedIn: true', () => {
    let state = fromJS({
      isNotificationDrawerVisible: true
    });
    const result = {displayDrawer: true};
    const mapProps = mapStateToProps(state);
    expect(mapProps).toEqual(result);
  });
});
