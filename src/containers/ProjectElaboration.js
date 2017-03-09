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
})

const mapDispatchToProps = dispatch => ({
  reply: (text, payload) => dispatch(projectElaborationReply.request(text, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
