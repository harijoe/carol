import React from 'react'
import { connect } from 'react-redux'
import { fromProjectElaboration, fromContext } from 'store/selectors'

import { RenderChildrenOneByOne } from 'components'
import {projectElaborationSetIsNewConversation} from "../store/projectElaboration/actions"

const RenderChildrenOneByOneContainer = props => <RenderChildrenOneByOne {...props} />

const mapStateToProps = state => ({
  isNewConversation: fromProjectElaboration.isNewConversation(state),
  isFeatureDisabled: fromContext.isFeatureEnabled(state, 'disable-chatbot-animations'),
})

const mapDispatchToProps = dispatch => ({
  setIsNewConversation: payload => dispatch(projectElaborationSetIsNewConversation(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RenderChildrenOneByOneContainer)
