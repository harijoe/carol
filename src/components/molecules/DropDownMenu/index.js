import React, { Component, PropTypes } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'

import messages from 'utils/messages'

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
    const { intl: { formatMessage }, children, label } = this.props
    const { open, anchorEl } = this.state

    return (
      <div>
        <RaisedButton
          onClick={this.handleTouchTap}
          label={formatMessage(messages(label).label)}
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
  label: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(DropDownMenu)
