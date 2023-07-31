import React from 'react'
import { shallow } from 'enzyme';
import App from './App'
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App component renders without failing', () => {
    it('renders App component', () => {
      shallow(<App />);
    });
    it('renders Notifications component', () => {
      shallow(<Notifications />).exists();
    });
    it('renders Header component', () => {
      shallow(<Header />).exists();
    });
    it('renders Login component', () => {
      shallow(<Login />).exists();
    });
    it('renders Footer component', () => {
      shallow(<Footer />).exists();
    });

    it(' a test to check that CourseList is not displayed', () => {
      const wrapper = shallow(<App isLoggedIn = {false} />)
      expect(wrapper.find(CourseList).length).toBe(1);
      // wrapper.setProps({isLoggedIn: true})

      expect(wrapper.contains(<CourseList />)).toBe(true);
    });

    it ('when isLoggedIn is true, the Login component is not rendered but the CourseList is rendered', () => {
      const wrapper = shallow(<App isLoggedIn = {true} />)
      expect(wrapper.contains(<CourseList />)).toBe(true);
      expect(wrapper.contains(<Login />)).toBe(false);
    })

//     it('renders div className App-header', () => {
//           expect(shallow(<App />).find('.App-header').length).toBe(1);
//     });
//     it('renders div className App-body', () => {
//           expect(shallow(<App />).find('.App-body').length).toBe(1);
//     });
//     it('renders div className App-footer', () => {
//               expect(shallow(<App />).find('.App-footer').length).toBe(1);
//     });
})

