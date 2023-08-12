import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <div className={css(styles['App-header'])}>
      <img src={logo} className={css(styles.img)} alt='logo' />
      <h1>School dashboard</h1>
    </div>
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

export default Header;
