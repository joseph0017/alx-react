import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />).exists();
  });

  it('renders a list of courses', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('table').children()).toHaveLength(2);
    expect(wrapper.find('thead').children()).toHaveLength(2);
  });
});
