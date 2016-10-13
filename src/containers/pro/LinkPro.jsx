import React, { Component } from 'react'
import { proUrl } from '../../config'

class LinkPro extends Component {
  constructor() {
    super()

    this.state = {
      country: proUrl.DEFAULT
    }
  }

  componentWillMount() {
    const country = proUrl[this.props.country]

    if (country) {
      this.setState({
        country
      })
    }
  }

  render() {
    return (
      <a href={this.state.country}>
        Je suis artisan
      </a>
    )
  }
}

LinkPro.propTypes = {
  country: React.PropTypes.string.isRequired
}

export default LinkPro
