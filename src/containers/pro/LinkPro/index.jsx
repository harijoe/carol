import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { countryConfig, defaultProUrl } from '../../../config'

class LinkPro extends Component {
  constructor() {
    super()

    this.state = {
      linkPro: defaultProUrl
    }
  }

  componentWillMount() {
    const linkPro = countryConfig[this.props.countryCode].proUrl

    if (linkPro) {
      this.setState({
        linkPro
      })
    }
  }

  render() {
    return (
      <a href={this.state.linkPro}>
        <FormattedMessage id="pro.i_am_pro" />
      </a>
    )
  }
}

LinkPro.propTypes = {
  countryCode: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    countryCode: state.country.get('countryCode')
  }
}

export default connect(mapStateToProps)(LinkPro)
