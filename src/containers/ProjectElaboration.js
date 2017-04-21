import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  projectElaborationReply,
  projectElaborationConversationCurrent,
  projectElaborationConversationsSelect,
  projectElaborationGoToPreValidatePage,
} from 'store/actions'
import { fromProjectElaboration } from 'store/selectors'

import { ProjectElaboration } from 'components'


class ProjectElaborationContainer extends Component {
  static propTypes = {
    reply: PropTypes.func,
    request: PropTypes.func,
    selectConversation: PropTypes.func,
    goToPreValidatePage: PropTypes.func,
    activeConversation: PropTypes.array,
    conversations: PropTypes.object,
    hasConversations: PropTypes.bool,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { activeConversation, conversations, reply, selectConversation, hasConversations, goToPreValidatePage } = this.props

    return <ProjectElaboration {...{ activeConversation, conversations, reply, selectConversation, hasConversations, goToPreValidatePage }} />
  }
}

const mapStateToProps = state => ({
  activeConversation: fromProjectElaboration.getConversation(state),
  hero: fromProjectElaboration.getHero(state),
  conversations: fromProjectElaboration.getConversations(state),
  hasConversations: fromProjectElaboration.hasConversations(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  reply: (text, payload) => projectElaborationReply.request(text, payload),
  request: () => projectElaborationConversationCurrent.request(),
  selectConversation: authType => projectElaborationConversationsSelect.request(authType),
  goToPreValidatePage: url => projectElaborationGoToPreValidatePage(url),
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
