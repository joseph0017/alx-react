import { shallow } from 'enzyme';
import Notifications from './Notifications'

describe('Notifications', () => {
    it('renders Notifcation component without crashing', () => {
        shallow(<Notifications />)
    })
    it('renders className Notifcation li inside ul without crashing', () => {
            expect(shallow(<Notifications />).find('li')).toHaveLength(3)
    })
    it('compares className Notifcation p output', () => {
                expect(shallow(<Notifications />).find('p').text()).toBe('Here is the list of notifications')
    })
})