import React from 'react'
import { connect } from 'react-redux'

import { ProjectElaboration } from 'components'
import { projectElaborationReply } from 'store/actions'
import { fromProjectElaboration } from 'store/selectors'

const ProjectElaborationContainer = props => (
  <ProjectElaboration {...props} />
)

const mapStateToProps = state => ({
  conversation: fromProjectElaboration.getConversation(state),
  answered: fromProjectElaboration.getAnswered(state),
})

const mapDispatchToProps = dispatch => ({
  reply: text => dispatch(projectElaborationReply.request(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
