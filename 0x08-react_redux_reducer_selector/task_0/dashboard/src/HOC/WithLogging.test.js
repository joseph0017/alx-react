import React from 'react'
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

function TestComponent () {
    return(
        <p>Hey Joey</p>
    )
}

describe('WithLogging', () => {
    it('renders without crashing', () => {
        shallow(<WithLogging />);
    });

    it('checks mount and on unmount is consoled to the broswer', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
        const HOCComponent = WithLogging(TestComponent)
        const wrapper = shallow(<HOCComponent />)

        expect(logSpy).toBeCalledTimes(1)

        wrapper.unmount()
        expect(logSpy).toBeCalledTimes(2)
        logSpy.mockRestore()
    })

    it('checks mount and on unmount with Component when the wrapped element is pure html', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
        const HOCComponent = WithLogging(TestComponent)
        const wrapper = shallow(<HOCComponent />)

        expect(logSpy).toBeCalledTimes(1)
        expect(logSpy).toBeCalledWith('Component TestComponent is mounted')

        wrapper.unmount()
        expect(logSpy).toBeCalledTimes(2)
        expect(logSpy).toBeCalledWith('Component TestComponent is going to unmount')
        logSpy.mockRestore()
    })
})