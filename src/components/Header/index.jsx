import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import injectTapEventPlugin from 'react-tap-event-plugin'
import DropDownMenu from 'material-ui/DropDownMenu'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { bindActionCreators } from 'redux'
import Login from '../../containers/user/Login'
import './header.scss'
import countryUpdate from '../../actions/header'
import countryList, { countryDefault } from '../../constants/country'

injectTapEventPlugin()

class Header extends Component {
  constructor() {
    super()

    this.handleRequestClose = this.handleRequestClose.bind(this)
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleChangeCountry = this.handleChangeCountry.bind(this)
    this.updateCountry = this.updateCountry.bind(this)

    this.state = {
      open: false,
      country: countryDefault,
      anchorEl: null
    }
  }

  componentWillMount() {
    this.updateCountry(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.updateCountry(newProps)
  }

  updateCountry(props) {
    this.setState({ country: props.country.get('countryCode') })
  }

  handleChangeCountry(event, index, country) {
    this.setState({ country })
    this.props.countryUpdate(country)
  }

  login() {
    if (!this.props.user) {
      return (
        <li>
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="O"
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
        </li>
      )
    }

    return (
      <li>
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
      </li>
    )
  }

  country() {
    const countryMenuItems = Object.keys(countryList).map((c, i) => {
      return <MenuItem key={i} value={c} primaryText={countryList[c]} />
    })

    return (
      <li>
        <DropDownMenu value={this.state.country} onChange={this.handleChangeCountry} openImmediately={false}>
          { countryMenuItems }
        </DropDownMenu>
      </li>
    )
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
      <header>
        <ul>
          <li><Link to="*">Burger menu</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Site search</Link></li>
          <li><Link to="/search-pro">Find a pro</Link></li>
          <li><Link to="/help">Help</Link></li>
          {this.login()}
          {this.country()}
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  countryUpdate: React.PropTypes.func,
  country: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.user,
    country: state.country
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ countryUpdate }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)