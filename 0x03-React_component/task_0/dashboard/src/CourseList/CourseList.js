import React from 'react'
import './CourseList.css'
import CourseListRow from './CourseListRow'
import PropTypes from "prop-types";
import CourseShape from './CourseShape';

const CourseList = ({listCourses}) => {
  return (
    <table id='CourseList'>
        <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true} />
        </thead>
        <tbody>
            { listCourses === null ? <CourseListRow textFirstCell="No course available yet"  /> :
              listCourses.map((item) => (
                <CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit} isHeader={false} />
              ))
            }
        </tbody>
    </table>
  )
}

export default CourseList

CourseList.propTypes  = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}