import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({listCourses}) => {
  return (
    <table id='CourseList' className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          and
          isHeader={true} />
      </thead>
      <tbody>
        {listCourses === null ? <CourseListRow textFirstCell='No course available yet' /> :
           listCourses.map((item) => (
             <CourseListRow
               key={item.id}
               textFirstCell={item.name}
               textSecondCell={item.credit}
               isHeader={false} />
           ))}
      </tbody>
    </table>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2em',
    margin: '3px',
    marginBottom: '15em'
  },

  th: {
    borderBottom: '1px solid #ddd'
  },

  td: {
    width: '85%'
  },

  table: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  tr: {
    'nth-child(2)': {
      textAlign: 'left'
    }
  }
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};
