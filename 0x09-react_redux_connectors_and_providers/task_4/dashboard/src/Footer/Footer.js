import React from 'react'
import './Footer.css'
import {getFooterCopy, getFullYear} from '../utils/utils';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const Footer = ({user}) => {
  return (
    <>
    {user && (
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

Footer.defaultProps = {
  user: null
}

Footer.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.ui.get('user')
  }
}

export default connect(mapStateToProps)(Footer)