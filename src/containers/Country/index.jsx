import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { countryUpdate } from './ducks'
import countryList, { countryDefault } from '../../constants/country'

class Country extends Component {
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

  render () {
    const countryMenuItems = Object.keys(countryList).map((c, i) => {
      return <MenuItem key={i} value={c} primaryText={countryList[c]} />
    })

    return (
      <DropDownMenu value={this.state.country} onChange={this.handleChangeCountry} openImmediately={false}>
        { countryMenuItems }
      </DropDownMenu>
    )
  }
}

Country.propTypes = {
  countryUpdate: React.PropTypes.func,
  country: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    country: state.country
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ countryUpdate }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Country)
