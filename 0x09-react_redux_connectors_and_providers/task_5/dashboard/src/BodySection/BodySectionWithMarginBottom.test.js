import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='hey joey' />);
    expect(wrapper.find(BodySection)).toHaveLength(1);

    expect(wrapper.find(BodySection).html()).toEqual('<div class="bodySection"><h2> hey joey </h2></div>');
  });
});
