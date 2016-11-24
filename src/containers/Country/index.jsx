import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { countryConfig } from '../../config'

class Country extends Component {
  constructor() {
    super()

    this.handleChangeCountry = this.handleChangeCountry.bind(this)
    this.updateCountry = this.updateCountry.bind(this)

    this.state = {
      open: false,
      country: null,
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
    window.location.assign(`http://${countryConfig[country].url}`)
  }

  render () {
    const countryMenuItems = Object.keys(countryConfig).map((c, i) => {
      const locale = countryConfig[c].country
      const countryTran = <FormattedMessage id={locale} />

      return (
        <MenuItem
          key={i}
          value={c}
          primaryText={countryTran}
        />
      )
    })

    return (
      <DropDownMenu
        value={this.state.country}
        onChange={this.handleChangeCountry}
        openImmediately={false}
      >
        { countryMenuItems }
      </DropDownMenu>
    )
  }
}

Country.propTypes = {
  countryUpdate: React.PropTypes.func,
  country: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    country: state.country
  }
}

export default connect(mapStateToProps)(Country)
