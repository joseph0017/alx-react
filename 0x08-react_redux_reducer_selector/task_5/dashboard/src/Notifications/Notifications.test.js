import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications', () => {
  it('renders Notifcation component without crashing', () => {
    shallow(<Notifications />);
  });
  it('renders className Notifcation li inside ul without crashing', () => {
    expect(shallow(<Notifications />).children()).toHaveLength(2);
  });
  it('compares className Notifcation p output', () => {
    expect(shallow(<Notifications />).find('p').text()).toBe('Your notifications');
  });

  it('checks if the div with className of menuItem is displayed when displayDrawer is false', () => {
    expect(shallow(<Notifications displayDrawer={false} />).find('div.Notifications').exists()).toEqual(false);
    expect(shallow(<Notifications displayDrawer={false} />).find('div.menuItem').exists()).toEqual(false);
  });

  it(' Notifications renders correctly if you pass an empty array or if you do not pass the listNotifications property', () => {
    expect(shallow(<Notifications listNotifications={[]} />).exists());
  });

  // it('mockups the console.log from the markAsRead function', () => {
  //   const logSpy = jest.spyOn(console, 'log').mockImplementation()
  //   const wrapper = shallow(<Notifications />).instance().markAsRead(id)
  //   const id = wrapper
  //   expect(logSpy).toHaveBeenCalled()
  //   expect(logSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`)
  //   logSpy.mockRestore()
  // })

  it('Add a test to verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);

    wrapper.find('div').at(0).simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it('Add a test to verify that clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);

    wrapper.find('button').first().simulate('click');
    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
