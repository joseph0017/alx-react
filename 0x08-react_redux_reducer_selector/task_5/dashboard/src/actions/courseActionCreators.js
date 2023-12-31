import { UNSELECT_COURSE, SELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index
  };
};

export const boundSelectCourse = (index) => {
  dispatch(selectCourse(index));
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index
  };
};

export const boundUnSelectCourse = (index) => {
  dispatch(unSelectCourse(index));
};

export const fetchCourseSuccess = () => {
  const courses = {
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
  return { courses};
};
export const boundFetchCourseSuccess = () => {
  dispatch(fetchCourseSuccess());
};
