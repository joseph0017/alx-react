import React, { useState } from 'react'
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styleRow = {
    backgroundColor: '#f5f5f5ab'
}

const styleHeader = {
    backgroundColor: '#deb5b545'
}


const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  const [isChecked, setIsChecked] = useState(false)
  const selectedStyle = isHeader ? styleHeader : styleRow;

  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <tr style={selectedStyle}  className = {isChecked ? css(styles.rowChecked) : null}>
        {isHeader ? (
            textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
            ) : (
                <>
                <th style={styleHeader}>{textFirstCell}
                <input type="checkbox" onChange={handleChecked} />
                </th>
                <th style={styleHeader}>{textSecondCell}</th>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#deb5b545",
  },

  default: {
    backgroundColor: "#f5f5f5ab",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}