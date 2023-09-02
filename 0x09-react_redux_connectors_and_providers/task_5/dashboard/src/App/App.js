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
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      logOut: this.logOut,
    }

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
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
      hideNotificationDrawer,
      login
    } = this.props

    return (
      <AppContext.Provider value={{ user, logOut}} >
      <>
      <Notifications 
      listNotifications={this.state.listNotifications} displayDrawer={displayDrawer}
      handleDisplayDrawer={displayNotificationDrawer} handleHideDrawer={hideNotificationDrawer}
      />
      <div className={css(styles.App)}>
        <Header />
        { isLoggedIn ?
            <BodySectionWithMarginBottom title = 'Course list' >
              <CourseList listCourses={this.listCourses} /> 
            </BodySectionWithMarginBottom>
            : 
            <BodySectionWithMarginBottom title = 'Log in to continue' >
              <Login logIn = {login} />
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
  hideNotificationDrawer: () => {},
  login: () => {}
}

App.propTypes = {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
}

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
		displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: () => dispatch(loginRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);