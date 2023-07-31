import React from 'react'
import './Notifications.css';
import close from '../close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from "prop-types";

const Notifications = ({displayDrawer}) => {
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
            <NotificationItem type='default' value = "New course available" />
            <NotificationItem type='urgent' value = "New resume available" />
            <NotificationItem type='urgent' html={ getLatestNotification() } />
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
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}