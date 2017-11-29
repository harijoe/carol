import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Link from 'components/Link'

class SendSMSButton extends Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    this.setState({ clicked: true }, this.props.send)
  }

  render() {
    if (this.state.clicked) {
      return <FormattedMessage id="user.new_sms_sent" />
    }

    return (
      <Link onClick={this.handleClick} highlight>
        <FormattedMessage id="user.send_sms_again" />
      </Link>
    )
  }
}

SendSMSButton.propTypes = {
  send: PropTypes.func,
}

export default SendSMSButton
