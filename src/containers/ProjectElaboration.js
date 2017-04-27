import React, { Component, PropTypes } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  projectElaborationReply,
  projectElaborationConversationCurrent,
  projectElaborationConversationsSelect,
} from 'store/actions'
import { fromProjectElaboration, fromContext } from 'store/selectors'

import { ProjectElaboration } from 'components'


class ProjectElaborationContainer extends Component {
  static propTypes = {
    reply: PropTypes.func,
    request: PropTypes.func,
    selectConversation: PropTypes.func,
    redirectTo: PropTypes.func,
    activeConversation: PropTypes.array,
    conversations: PropTypes.object,
    hasConversations: PropTypes.bool,
    locale: PropTypes.string,
    location: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const {
      activeConversation,
      conversations,
      reply,
      selectConversation,
      hasConversations,
      locale,
      redirectTo,
      location,
    } = this.props

    return (
      <ProjectElaboration
        {...{
          activeConversation,
          conversations,
          reply,
          selectConversation,
          hasConversations,
          locale,
          redirectTo,
          location,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  activeConversation: fromProjectElaboration.getConversation(state),
  hero: fromProjectElaboration.getHero(state),
  conversations: fromProjectElaboration.getConversations(state),
  hasConversations: fromProjectElaboration.hasConversations(state),
  locale: fromContext.getLocale(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  reply: (text, payload) => projectElaborationReply.request(text, payload),
  request: () => projectElaborationConversationCurrent.request(),
  selectConversation: authType => projectElaborationConversationsSelect.request(authType),
  redirectTo: url => push(url),
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
