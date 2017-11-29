import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RenderChildrenOneByOne extends Component {
  static propTypes = {
    interval: PropTypes.number.isRequired,
    enabled: PropTypes.bool.isRequired,
    onAllRendered: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
    isFeatureDisabled: PropTypes.bool.isRequired,
  }

  state = {
    nbElementsToDisplay: 0,
    elements: [],
    runningTimeouts: [],
  }

  componentWillReceiveProps({ children, enabled, isFeatureDisabled, onAllRendered }) {
    if (!enabled || isFeatureDisabled) {
      return
    }

    // Flattens children from array of arrays to a single array of components
    const elements = React.Children.toArray(children)

    // Because props are updated multiple times and we don't want to trigger the animation again
    if (elements.length === this.state.elements.length) {
      return
    }

    this.setState({ elements, enabled, nbElementsToDisplay: 1 }, () => {
      const elementsToAnimate = elements.slice(1)
      const runningTimeouts = elementsToAnimate.map((el, index) =>
        window.setTimeout(() => {
          const animationStillGoing = index + 2 !== this.state.elements.length
          this.setState({ nbElementsToDisplay: index + 2 })
          if (!animationStillGoing) {
            onAllRendered()
          }
        }, this.props.interval * (index + 1))
      )
      this.setState({ runningTimeouts })
    })
  }

  componentWillUnmount() {
    this.state.runningTimeouts.forEach(id => window.clearTimeout(id))
  }

  render() {
    const { elements, nbElementsToDisplay } = this.state
    const { enabled, children } = this.props
    return (
      <div>
        {enabled ? elements.slice(0, nbElementsToDisplay) : React.Children.toArray(children)}
      </div>
    )
  }
}

export default RenderChildrenOneByOne
