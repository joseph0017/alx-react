import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('test for the selectCourse action. Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }', () => {
  it('selectcourse actions and creators' , () => {
    const selectCourseAction = { type: SELECT_COURSE, index: 1 };

    expect(selectCourse(1)).toEqual(selectCourseAction);
  });
  it('unselectCourse actions and creators' , () => {
    const unSelectCourseAction = { type: UNSELECT_COURSE, index: 1 };

    expect(unSelectCourse(1)).toEqual(unSelectCourseAction);
  });
});
