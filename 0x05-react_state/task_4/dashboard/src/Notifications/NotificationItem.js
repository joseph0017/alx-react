import React, { Component } from 'react'
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

export default class NotificationItem extends Component {
  render() {
    const {type, html, value, markAsRead, id} = this.props
    return (
      <>
      { value? <li className={type === 'default'? css(styles.default) : css(styles.urgent)} 
      data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>: null }

      {html? <li data-urgent dangerouslySetInnerHTML={{__html: html}} onClick={() => markAsRead(id)} ></li>: null}
      </>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",

    "@media (max-width: 378px)": {
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    listStyle: "none"
    }
  },
  urgent: {
    color: "#e0354b",
    "@media (max-width: 378px)": {
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    listStyle: "none"
    }
  },

})

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,

  markAsRead: PropTypes.func,
  id: PropTypes.number
}

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("Marking as read")
  },
  id: 0
}