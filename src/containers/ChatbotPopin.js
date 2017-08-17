import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'
import { toggleChatbotPopinMode } from 'store/actions'

import { ChatbotPopin } from 'components'

const ChatbotPopinContainer = props => <ChatbotPopin {...props} />

const mapStateToProps = state => ({
  show: fromContext.getChatbotPopin(state),
  mode: fromContext.getChatbotPopinMode(state),
})

const mapDispatchToProps = dispatch => ({
  toggleChatbotPopinMode: () => dispatch(toggleChatbotPopinMode()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotPopinContainer)
