import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromProjectElaboration, fromContext } from 'store/selectors'
import { projectElaborationHeroDetails, setProjectElaborationHeroResponse } from 'store/actions'

import { Hero } from 'components'

class HeroContainer extends Component {
  static propTypes = {
    hasConversations: PropTypes.bool,
    hasActiveConversation: PropTypes.bool,
    firstChoices: PropTypes.array,
    request: PropTypes.func,
    reply: PropTypes.func,
    ssr: PropTypes.bool,
    conversations: PropTypes.object,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    const { hasActiveConversation, firstChoices, reply, hasConversations, conversations, ssr } = this.props

    if (ssr) {
      return null
    }

    return <Hero {...{ firstChoices, reply, hasActiveConversation, hasConversations, conversations }} />
  }
}

const mapStateToProps = state => ({
  hasConversations: fromProjectElaboration.hasConversations(state),
  hasActiveConversation: fromProjectElaboration.hasActiveConversation(state),
  conversations: fromProjectElaboration.getConversations(state),
  firstChoices: fromProjectElaboration.getFirstChoices(state),
  ssr: fromContext.isSSR(state),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    request: () => projectElaborationHeroDetails.request(),
    reply: (text, payload) => setProjectElaborationHeroResponse(text, payload),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
