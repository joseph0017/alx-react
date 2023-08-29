import React, { useContext } from 'react'
import './Footer.css'
import {getFooterCopy, getFullYear} from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const {user} = useContext(AppContext)
  return (
    <>
    {user.isLoggedIn && (
      <p>
        <a href="#">Contact us</a>
      </p>
    )}
    <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
    </div>
    </>
  )
}

export default Footer