import { shallow } from 'enzyme';
import App from './App'
import React from 'react'

describe('App component renders without failing', () => {
    it('renders App component', () => {
      shallow(<App />);
    });

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

