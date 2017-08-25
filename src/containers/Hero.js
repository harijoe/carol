import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromProjectElaboration } from 'store/selectors'
import { projectElaborationHeroDetails, setProjectElaborationHeroAnswer } from 'store/actions'

import { Hero } from 'components'

class HeroContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <Hero {...this.props} />
  }
}

const mapStateToProps = state => ({
  hasActiveConversation: fromProjectElaboration.hasActiveConversation(state),
  conversations: fromProjectElaboration.getConversations(state),
  firstChoices: fromProjectElaboration.getFirstChoices(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      request: () => projectElaborationHeroDetails.request(),
      reply: (text, payload) => setProjectElaborationHeroAnswer(text, payload),
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
