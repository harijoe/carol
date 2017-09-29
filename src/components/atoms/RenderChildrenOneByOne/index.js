import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { flatten } from 'lodash'

class RenderChildrenOneByOne extends Component {
  static propTypes = {
    interval: PropTypes.number,
    children: PropTypes.array,
  }

  state = {
    nbElementsToDisplay: 0,
    elements: [],
    enabled: false,
    runningTimeouts: [],
  }

  componentWillReceiveProps({ children, isNewConversation:enabled, setIsNewConversation, isFeatureDisabled }) {
    if (!enabled || isFeatureDisabled) {
      return
    }

    // Flattens children from array of arrays to a single array of components
    const elements = flatten(children)

    // Because props are updated multiple times and we don't want to trigger the animation again
    if (elements.length === this.state.elements.length) {
      this.setState({ elements })
      return
    }

    this.setState({ elements, enabled, nbElementsToDisplay: 0 }, () => {
      const runningTimeouts = elements.map((el, index) =>
        window.setTimeout(() => {
          if (index + 1 > this.state.nbElementsToDisplay) {
            const animationStillGoing = index + 1 !== this.state.elements.length
            this.setState({nbElementsToDisplay: index + 1, enabled: animationStillGoing})
            if (!animationStillGoing) {
              setIsNewConversation(false)
            }
          }
        }, this.props.interval * (index + 1))
      )
      this.setState({ runningTimeouts })
    })
  }

  componentWillUnmount() {
    this.state.runningTimeouts.map(id => window.clearTimeout(id))
  }

  render  () {
    return <div>{this.state.enabled ? this.state.elements.slice(0, this.state.nbElementsToDisplay) : this.props.children}</div>
  }
}

export default RenderChildrenOneByOne
