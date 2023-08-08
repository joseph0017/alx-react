import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

import close from '../close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
      
      <div className={css(styles.menuItem)}>
        <p>Your notifications</p>
      </div>
      {displayDrawer ? 
      (
        <>
        <div className={css(styles.Notifications)}>
          <button style={{ marginLeft: "95%"}}
              onClick={console.log('Close button has been clicked')}
              aria-label='Close'
              >
                <img src={close} alt='x' width= "9px"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications === 0 ?  (
                <NotificationItem value="No new notification for now" />
              ) :
              listNotifications.map((item) => ((
                <NotificationItem key={item.id} type={item.type} value={item.value} html={item.html} markAsRead={this.markAsRead}/>
              )))
              }
            </ul>
        </div>
        </>
        ) : (
            null
        )
          }  </>
    )
  }
}

//Anime
const opacityAnime = {
  '0%': { opacity: 0.5 },
  '100%':{ opacity: 1 }
};


const bounceAnime = {
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-5px)' },
  '50%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const styles = StyleSheet.create({
  Notifications: {
      position: "absolute",
      right: "20px",
      border: "3px dashed #e0354b",
      padding: "3px",

      "@media (max-width: 378px)": {
        width: "94%",
        height: "100%",
        borderBottom: "none",
        fontSize: "20px",
        padding: "0px",
        backgroundColor: "#fff",
        border: "none"
      }
  },
  
  '[data-notification-type="default"]': {
      color: "blue",
  },


  '[data-notification-type="urgent"]': {
      color: "#e0354b",
  },
  '[data-urgent]': {
      color: "#e0354b",
  },

  menuItem: {
      textAlign: "right",
      marginRight: "100px",
      fontWeight: "bold",
      ":hover": {
        cursor: "pointer",
        animationName: [opacityAnime, bounceAnime],
        animationDuration: "1s, 0.5s",
        animationIterationCount: "3"
      }
  },

  "notification-header":{
    display: "flex",
    justifyContent: "space-between",
  }
})

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications : PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}