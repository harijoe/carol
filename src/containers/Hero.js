import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromProjectElaboration } from 'store/selectors'
import { projectElaborationHeroDetails, setProjectElaborationHeroAnswer } from 'store/actions'

import { Hero } from 'components'

class HeroContainer extends Component {
  static propTypes = {
    hasConversations: PropTypes.bool,
    hasActiveConversation: PropTypes.bool,
    firstChoices: PropTypes.array,
    request: PropTypes.func,
    reply: PropTypes.func,
    conversations: PropTypes.object,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { hasActiveConversation, firstChoices, reply, hasConversations, conversations } = this.props

    return <Hero {...{ firstChoices, reply, hasActiveConversation, hasConversations, conversations }} />
  }
}

const mapStateToProps = state => ({
  hasConversations: fromProjectElaboration.hasConversations(state),
  hasActiveConversation: fromProjectElaboration.hasActiveConversation(state),
  conversations: fromProjectElaboration.getConversations(state),
  firstChoices: fromProjectElaboration.getFirstChoices(state),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    request: () => projectElaborationHeroDetails.request(),
    reply: (text, payload) => setProjectElaborationHeroAnswer(text, payload),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
