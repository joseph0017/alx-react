import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

import { getLatestNotification } from '../utils/utils';

import PropTypes from "prop-types";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext, user } from './AppContext';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut
    }

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  handleKeyboardPress = (e) => {
    const {logOut} = this.props;
    if(e.ctrlKey && e.key === 'h') {
      alert('Logging you out')
      logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false
    })
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut = () => {
    this.setState({
      user
    });
  }
  
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyboardPress);
  }

  componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardPress);
    }

  render() {
    const {user, logOut} = this.state

    return (
      <AppContext.Provider value={{ user, logOut}} >
      <>
      <Notifications 
      listNotifications={this.listNotifications} displayDrawer={this.state.displayDrawer}
      handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}
      />
      <div className={css(styles.App)}>
        <Header />
        { user.isLoggedIn ?
            <BodySectionWithMarginBottom title = 'Course list' >
              <CourseList listCourses={this.listCourses} /> 
            </BodySectionWithMarginBottom>
            : 
            <BodySectionWithMarginBottom title = 'Log in to continue' >
              <Login logIn = {this.logIn} />
            </BodySectionWithMarginBottom>  
         }

         <BodySection title = 'News from the School' >
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti amet aliquid optio corrupti
              quo reiciendis similique repellat laudantium? Unde, mollitia. </p>
         </BodySection>

        <Footer />
      </div>
      </>
      </AppContext.Provider>
    );
  }  
}

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  }
})

App.defaultProps = {
  isLoggedIn : false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func
}