import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromContext, fromProjectElaboration } from 'store/selectors'

import { projectElaborationHeroDetails, setProjectElaborationHeroAnswer, clickOnFindAPro } from 'store/actions'

import MotionMenu from 'components/MotionMenu'

class MotionMenuContainer extends Component {
  static propTypes = {
    request: PropTypes.func,
    ssr: PropTypes.bool,
  }

  componentWillMount() {
    this.props.request()
  }

  render() {
    if (this.props.ssr) {
      return null
    }

    return <MotionMenu {...this.props} />
  }
}

const mapStateToProps = state => ({
  hasActiveConversation: fromProjectElaboration.hasActiveConversation(state),
  conversations: fromProjectElaboration.getConversations(state),
  firstChoices: fromProjectElaboration.getFirstChoices(state),
  showCookieBanner: fromContext.showCookiesBanner(state),
  isSSR: fromContext.isSSR(state),
  isPopInOpen: fromContext.getAccountNavigation(state) || fromContext.getMainNavigation(state) || fromContext.getSignInPopin(state),
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
