import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

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

    return <button type="button" onClick={this.handleClick}><FormattedMessage id="user.send_sms_again" /></button>
  }
}

SendSMSButton.propTypes = {
  send: PropTypes.func,
}

export default SendSMSButton
