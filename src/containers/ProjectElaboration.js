import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { projectElaborationReply } from 'store/actions'
import { fromProjectElaboration } from 'store/selectors'

import { ProjectElaboration } from 'components'


class ProjectElaborationContainer extends Component {
  static propTypes = {
    reply: PropTypes.func,
    conversation: PropTypes.array,
    heroResponse: PropTypes.shape({
      text: PropTypes.string,
      payload: PropTypes.string,
    }),
  }

  componentWillMount() {
    const { heroResponse, conversation } = this.props

    if (heroResponse.text === null && conversation.length === 0) {
      this.props.reply('new_project.reset')
    }
  }

  render() {
    const { conversation, reply } = this.props

    return <ProjectElaboration {...{ conversation, reply }} />
  }
}

const mapStateToProps = state => ({
  conversation: fromProjectElaboration.getConversation(state),
  hero: fromProjectElaboration.getHero(state),
  heroResponse: fromProjectElaboration.getHeroResponse(state),
})

const mapDispatchToProps = dispatch => ({
  reply: (text, payload) => dispatch(projectElaborationReply.request(text, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElaborationContainer)
