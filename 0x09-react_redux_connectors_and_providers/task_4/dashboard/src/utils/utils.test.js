import {getFullYear, getFooterCopy, getLatestNotification} from './utils'

test('testing correct output for full year', () => { 
    expect(getFullYear()).toEqual(2023)
 })

test('testing correct output for footer', () => { 
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard')
    expect(getFooterCopy(true)).toEqual('Holberton School')
 })
test('testing correct output for latest notifications', () => { 
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD')
 })