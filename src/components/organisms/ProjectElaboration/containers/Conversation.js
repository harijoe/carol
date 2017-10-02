import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fromProjectElaboration, fromContext } from 'store/selectors'

import {projectElaborationSetIsNewConversation} from 'store/projectElaboration/actions'
import Conversation from '../organisms/Conversation'

const ConversationContainer = props => <Conversation {...props} />

const mapStateToProps = state => ({
  isNewConversation: fromProjectElaboration.isNewConversation(state),
  locale: fromContext.getLocale(state),
})

const mapDispatchToProps = dispatch => ({
  setIsNewConversation: payload => dispatch(projectElaborationSetIsNewConversation(payload)),
  redirectTo: url => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
