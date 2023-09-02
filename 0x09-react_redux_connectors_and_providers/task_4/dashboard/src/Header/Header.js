import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types'


export const Header = ({user, logout }) => {
  return (
    <>
    <div className={css(styles['App-header'])}>
      <img src={logo} className={css(styles.img)} alt='logo' />
      <h1>School dashboard</h1>
    </div>

    {user && (
      <section id='logoutSection' >
        Welcome <h4>{user.email}</h4>
        <a href='#' onClick={logout}> SignOut </a>
      </section>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  'App-header': {
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: '3px solid #e0354b',
    color: '#e0354b'
  },

  img: {
    height: '200px',
    width: '200px'
  }

});

Header.defaultProps = {
  user: null,
  logout: () => {}
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}

function mapStateToProps(state) {
  return {
    user: state.ui.get('user')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)