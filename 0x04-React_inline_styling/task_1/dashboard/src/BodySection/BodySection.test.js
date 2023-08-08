import React from 'react'
import { shallow } from 'enzyme'
import BodySection from './BodySection'

describe('BodySection', () => {
    it(' checks the component renders  the children and one h2 element correctly', () => {
        const wrapper = shallow(<BodySection title= 'hey joey' />)
        expect(wrapper.children().exists()).toBe(true)
        expect(wrapper.find('h2').length).toBe(1)
    })


    it(' checks the component renders  the children and one h2 element correctly', () => {
        const wrapper = shallow(<BodySection title= 'test title'>
            <p>test children node</p>
        </BodySection>)
        expect(wrapper.find('h2').text()).toBe(' test title ')
        expect(wrapper.find('p').text()).toBe('test children node')
    })
})