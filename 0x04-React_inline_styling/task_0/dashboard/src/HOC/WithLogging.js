import React, { Component } from 'react'

const WithLogging = (MyComponent) => {
  const getName = MyComponent.displayName || MyComponent.name || 'Component';

  class WrappedComponent extends Component {
    componentDidMount() {
        console.log(`Component ${getName} is mounted`)
    }
    componentWillUnmount() {
        console.log(`Component ${getName} is going to unmount`)
    }
    render() {
        return <MyComponent {...this.props} />
    }
    static displayName = `WithLogging(${getName})` 
  }
  return WrappedComponent
}

export default WithLogging