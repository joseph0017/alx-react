import { selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE } from '../actions/courseActionTypes';
import courseReducer, { defaultState } from './courseReducer';

describe('courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    expect(defaultState).toEqual([]);
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const fetchCourseSuccessData = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20
        },
        {
          id: 3,
          name: 'React',
          credit: 40
        }
      ]
    };
    const courseReduce = courseReducer(fetchCourseSuccessData, FETCH_COURSE_SUCCESS);
    expect(courseReducer(fetchCourseSuccessData, FETCH_COURSE_SUCCESS)).toEqual(courseReduce);
  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const selectedCourseData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const getData = courseReducer(selectedCourseData, selectCourse(2));

    expect(courseReducer(selectedCourseData, selectCourse(2))).toEqual(getData);
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const UnSelectedCourseData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const getData = courseReducer(UnSelectedCourseData, unSelectCourse(2));

    expect(courseReducer(UnSelectedCourseData, unSelectCourse(2))).toEqual(getData);
  });
});
