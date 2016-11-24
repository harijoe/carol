import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import { injectIntl, intlShape } from 'react-intl'
import messages from './messages'

class Menu extends Component {
  constructor() {
    super()

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      open: false,
      anchorEl: null,
      routingKey: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const locationBeforeTransitions = nextProps.routing.locationBeforeTransitions

    if ((-1 !== ['PUSH', 'REPLACE'].indexOf(locationBeforeTransitions.action)) && this.state.routingKey !== locationBeforeTransitions.key) {
      this.handleRequestClose()
    }
  }

  handleTouchTap(event) {
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label={this.props.intl.formatMessage(messages(this.props.label).label)}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          {this.props.children}
        </Popover>
      </div>
    )
  }
}

Menu.propTypes = {
  children: React.PropTypes.any,
  label: React.PropTypes.string,
  intl: intlShape.isRequired
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(injectIntl(Menu))
