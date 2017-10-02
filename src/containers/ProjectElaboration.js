import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { projectElaborationReply, projectElaborationConversationCurrent } from 'store/actions'
import { fromProjectElaboration } from 'store/selectors'

import { ProjectElaboration } from 'components'

class ProjectElaborationContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <ProjectElaboration {...this.props} />
  }
}

const mapStateToProps = state => ({
  activeConversation: fromProjectElaboration.getConversation(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      reply: (text, payload) => projectElaborationReply.request(text, payload),
      request: () => projectElaborationConversationCurrent.request(),
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
