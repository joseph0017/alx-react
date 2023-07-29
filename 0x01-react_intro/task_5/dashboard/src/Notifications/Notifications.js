import React from 'react'
import './Notifications.css';
import close from '../close-icon.png'
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
      <button style={{ marginLeft: "95%"}}
        onClick={console.log('Close button has been clicked')}
        aria-label='Close'
        >
          <img src={close} alt='x' width= "9px"/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data='default'>New course available</li>
          <li data='urgent'>New resume available</li>
          <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} ></li>
        </ul>
    </div>
  )
}

export default Notifications