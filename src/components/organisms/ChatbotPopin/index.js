import React from 'react'
import PropTypes from 'prop-types'
import { SignInForm, SignUpForm, Popin } from 'containers'

const ChatbotPopin = ({ show, mode, toggleChatbotPopinMode }) => (
  <Popin show={show}>
    { mode === 'signin' && <SignInForm onSwitch={toggleChatbotPopinMode} /> }
    { mode === 'signup' && <SignUpForm onSwitch={toggleChatbotPopinMode} /> }
  </Popin>
)

ChatbotPopin.propTypes = {
  show: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  toggleChatbotPopinMode: PropTypes.func.isRequired,
}

export default ChatbotPopin

