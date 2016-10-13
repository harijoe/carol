import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { bindActionCreators } from 'redux'
import './header.scss'
import countryUpdate from '../../actions/header'
import countryList, { countryDefault } from '../../constants/country'
import MenuLogin from '../MenuLogin'
import MenuBurger from '../MenuBurger'

class Header extends Component {
  constructor() {
    super()

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

  country() {
    const countryMenuItems = Object.keys(countryList).map((c, i) => {
      return <MenuItem key={i} value={c} primaryText={countryList[c]} />
    })

    return (
      <DropDownMenu value={this.state.country} onChange={this.handleChangeCountry} openImmediately={false}>
        { countryMenuItems }
      </DropDownMenu>
    )
  }

  render() {
    return (
      <header>
        <ul>
          <li><MenuBurger /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Site search</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><MenuLogin /></li>
          <li>{this.country()}</li>
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
