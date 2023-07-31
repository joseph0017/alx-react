import React from 'react'
import PropTypes from "prop-types";

const NotificationItem = ({type, html, value}) => {
  return (
    <>
    {value ? <li data-notification-type={type}>{value}</li>: null}
    {html ? <li data-urgent dangerouslySetInnerHTML={{__html: html}}></li>: null}
    </>
  )
}

export default NotificationItem

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: "default"
}