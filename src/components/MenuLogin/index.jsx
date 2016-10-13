import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Login from '../../containers/user/Login'

class MenuLogin extends Component {
  constructor() {
    super()

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)

    this.state = {
      open: false,
      anchorEl: null
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
    if (!this.props.user) {
      return (
        <div>
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="My account"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <Login />
          </Popover>
        </div>
      )
    }

    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="My account"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="My Projects" />
            <MenuItem primaryText="My infos" />
            <MenuItem primaryText="Messaging" />
            <MenuItem primaryText="log out" />
          </Menu>
        </Popover>
      </div>
    )
  }
}

MenuLogin.propTypes = {
  user: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MenuLogin)
