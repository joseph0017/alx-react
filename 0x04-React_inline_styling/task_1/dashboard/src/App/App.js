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
import WithLogging from '../HOC/WithLogging';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
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
  
  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyboardPress);
  }

  componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardPress);
    }

  render() {
    const {isLoggedIn} = this.props;

    const HOCLogging = WithLogging(Notifications)
    return (
      <>
      <Notifications listNotifications={this.listNotifications} />
      <div className={css(styles.App)}>
        <Header />
        <HOCLogging />
        { isLoggedIn ?
            <BodySectionWithMarginBottom title = 'Course list' >
              <CourseList listCourses={this.listCourses} /> 
            </BodySectionWithMarginBottom>
            : 
            <BodySectionWithMarginBottom title = 'Log in to continue' >
              <Login />
            </BodySectionWithMarginBottom>  
         }

         <BodySection title = 'News from the School' >
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti amet aliquid optio corrupti
              quo reiciendis similique repellat laudantium? Unde, mollitia. </p>
         </BodySection>

        <Footer />
      </div>
      </>
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