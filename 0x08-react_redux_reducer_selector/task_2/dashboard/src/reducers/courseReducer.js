import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

export const defaultState = []

export default function courseReducer (state = defaultState , action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
        return action.data.map((courses) => ({
            ...courses,
            isSelected: false
        }))
    case SELECT_COURSE:
        return state.filter((selectedCourses) => {
            if (selectedCourses.id === action.index) {
                return {
                    ...selectedCourses,
                    isSelected: true,
                }
            }
        })
    case UNSELECT_COURSE:
        return state.filter((unSelectedCourses) => {
            if (unSelectedCourses.id === action.index) {
                return {
                    ...unSelectedCourses,
                    isSelected: false,
                }
            }
        })
    default:
      return state;
  }
};
