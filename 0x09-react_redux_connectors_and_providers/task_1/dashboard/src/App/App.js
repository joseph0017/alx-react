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
import  AppContext, {user}  from './AppContext';
import { connect } from 'react-redux'
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      logOut: this.logOut,

      listNotifications : [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ],
    }

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }
  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  handleKeyboardPress = (e) => {
    const {logOut} = this.props;
    if(e.ctrlKey && e.key === 'h') {
      alert('Logging you out')
      logOut();
    }
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

  markNotificationAsRead = (id) => {
    const changedList = this.state.listNotifications.filter(
      (notification) => notification.id !== id
    )
    this.setState({ listNotifications: changedList });
    console.log('should be deleted');
  }
  
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyboardPress);
  }

  componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardPress);
    }

  render() {
    const {user, logOut} = this.state
    const { isLoggedIn, 
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer
    } = this.props

    return (
      <AppContext.Provider value={{ user, logOut}} >
      <>
      <Notifications 
      listNotifications={this.state.listNotifications} displayDrawer={displayDrawer}
      handleDisplayDrawer={displayNotificationDrawer} handleHideDrawer={hideNotificationDrawer}
      markNotificationAsRead = {this.markNotificationAsRead}
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
  logOut: () => {},
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {}
}

App.propTypes = {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func
}

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible'),
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);