import React from 'react'
import './Notifications.css';
import close from '../close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({displayDrawer, listNotifications }) => {
  return (
    <>
    {displayDrawer ? 
    (
      <>
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
      <div className='Notifications'>
        <button style={{ marginLeft: "95%"}}
            onClick={console.log('Close button has been clicked')}
            aria-label='Close'
            >
              <img src={close} alt='x' width= "9px"/>
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications ? listNotifications.map((item) => ((
              <NotificationItem key={item.id} type={item.type} value={item.value} html={item.html} />
            ))) : (
              <NotificationItem value="No new notification for now" />
            )
            }
          </ul>
      </div>
      </>
      ) : (
          <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )
        }  </>
  )
}

export default Notifications

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications : PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}