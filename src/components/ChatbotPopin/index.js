import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignInForm from 'containers/SignInForm'
import SignUpForm from 'containers/SignUpForm'
import Popin from 'containers/Popin'
import pushGtmEvent from 'utils/gtm'

class ChatbotPopin extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
    toggleChatbotPopinMode: PropTypes.func.isRequired,
  }

  state = {
    pristine: true,
  }

  componentWillReceiveProps = ({ show }) => {
    if (show && this.state.pristine) {
      pushGtmEvent({ event: 'AccountCreation' })
      this.setState({ hasBeenOpened: false })
    }
  }

  render() {
    const { show, mode, toggleChatbotPopinMode } = this.props

    return (
      <Popin show={show}>
        {mode === 'signin' && <SignInForm onSwitch={toggleChatbotPopinMode} />}
        {mode === 'signup' && <SignUpForm onSwitch={toggleChatbotPopinMode} />}
      </Popin>
    )
  }
}

export default ChatbotPopin
