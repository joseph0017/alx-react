import React from 'react'
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('renders without crashing', () => {
        shallow(<CourseListRow />).exists()
    });

    it('component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="testing" textSecondCell={null} />);
            expect(wrapper.find('tr')).toHaveLength(1);
            expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">testing</th>');
        });

    it('component renders 2 cells with when isHeader is false', () => {
                const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="testing" textSecondCell="testing" />);
                expect(wrapper.find('tr').children()).toHaveLength(2);
                expect(wrapper.find("tr").childAt(0).html()).toEqual('<td>testing</td>');
                expect(wrapper.find("tr").childAt(1).html()).toEqual('<td>testing</td>');
    });
})