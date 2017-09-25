import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromProjectElaboration } from 'store/selectors'
import { projectElaborationHeroDetails, setProjectElaborationHeroAnswer, clickOnFindAPro } from 'store/actions'

import { MotionMenu } from 'components'

class MotionMenuContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    return <MotionMenu {...this.props} />
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
      redirectToConversation: () => dispatch(clickOnFindAPro()),
      request: () => projectElaborationHeroDetails.request(),
      reply: (text, payload) => setProjectElaborationHeroAnswer(text, payload),
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(MotionMenuContainer)
