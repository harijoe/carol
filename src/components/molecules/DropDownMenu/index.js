import React, { Component, PropTypes } from 'react'
import Popover from 'material-ui/Popover'

import { LogInButton } from 'components'

class DropDownMenu extends Component {
  constructor() {
    super()

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      open: false,
      anchorEl: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    const locationBeforeTransitions = nextProps.routing.locationBeforeTransitions

    if (['PUSH', 'REPLACE'].indexOf(locationBeforeTransitions.action) !== -1) {
      this.handleRequestClose()
    }
  }

  handleTouchTap(event) {
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const { children } = this.props
    const { open, anchorEl } = this.state

    return (
      <div>
        <LogInButton
          onClick={this.handleTouchTap}
        />
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          {children}
        </Popover>
      </div>
    )
  }
}

DropDownMenu.propTypes = {
  children: PropTypes.any,
}

export default DropDownMenu
