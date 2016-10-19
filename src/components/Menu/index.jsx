import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'

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
    const transitionType = nextProps.routing.locationBeforeTransitions

    if ((-1 !== ['PUSH', 'REPLACE'].indexOf(transitionType)) && this.state.routingKey !== nextProps.routing.locationBeforeTransitions.key) {
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
          label={this.props.label}
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
  label: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(Menu)
