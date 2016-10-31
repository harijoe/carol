import React, { Component } from 'react'
import { connect } from 'react-redux'
import { proUrl } from '../../../config'

class LinkPro extends Component {
  constructor() {
    super()

    this.state = {
      linkPro: proUrl.DEFAULT
    }
  }

  componentWillMount() {
    const linkPro = proUrl[this.props.countryCode]

    if (linkPro) {
      this.setState({
        linkPro
      })
    }
  }

  render() {
    return (
      <a href={this.state.linkPro}>
        Je suis artisan
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
