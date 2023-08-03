import React from 'react'
import PropTypes from "prop-types";

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  return (
    <tr>
        {isHeader ? (
            textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : (
                <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
                </>
            )
            ) : (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
        )}
    </tr>
  )
}

export default CourseListRow

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}