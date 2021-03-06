import React, { Component } from 'react'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null,
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        component,
      })
    }

    render() {
      const ComponentFromState = this.state.component

      return ComponentFromState ? <ComponentFromState {...this.props} /> : null
    }
  }

  return AsyncComponent
}
