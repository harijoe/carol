import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return (
      <ProjectElaboration
        {...this.props}
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
