import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />).exists();
  });

  it('renders the correct html (for example: type="default" and value="test"', () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({type: 'default', value: 'test'});
    expect(wrapper.html()).toEqual(('<li class="default_ulqd5l" data-notification-type="default">test</li>'));
  });
// it(' it renders the correct html (for example: html={{ __html: "<u>test</u>" }}', () => {
//     const wrapper = shallow(<NotificationItem />)
//     wrapper.setProps({html: '<u>test</u>'})
//     expect(wrapper.html()).toEqual(('<li><u>test</u></li>'))
// })
});
