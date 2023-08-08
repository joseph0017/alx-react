import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
        <div className={css(styles['App-login'])}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className={css(styles.input)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className={css(styles.input)} />
            <button>OK</button>
        </div>
    </>
  )
}

const styles = StyleSheet.create({
  "App-login": {
    height: "100vh",
    borderBottom: "3px solid #e0354b"
  },
  
  input: {
    marginLeft: "30px"
  }
  
})

export default Login