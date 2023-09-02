import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    const {logIn} = this.props
    logIn()
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
    console.log(e.target.value)
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
    console.log(e.target.value)
  }

  componentDidUpdate(prevProps, prevState) {
    const {email, password, enableSubmit} = this.state
    if(email !== prevState.email || password !== prevState.password) {
      if(email !== '' && password !== '') {
        this.setState({enableSubmit: true})
      } else {
        if(enableSubmit !== false) {
          this.setState({enableSubmit: false})
        }
      }
    }
  }

  render() {
    const {handleLoginSubmit, handleEmailChange, handlePasswordChange } = this
    const {enableSubmit} = this.state
    return (
      <>
        <div className={css(styles['App-login'])}>
            <p>Login to access the full dashboard</p>
            <form onSubmit={handleLoginSubmit} >
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className={css(styles.input)}
               onChange={handleEmailChange} />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className={css(styles.input)} 
              onChange={handlePasswordChange}
              />
              <input type="submit" value="OK" disabled={!enableSubmit} />

            </form>
            
        </div>
    </>
    )
  }
}


const styles = StyleSheet.create({
  "App-login": {
    height: "100vh",
    borderBottom: "3px solid #e0354b",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    }
  },
  
  input: {
    margin: "10px"
  }
  
})

