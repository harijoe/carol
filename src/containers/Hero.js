import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fromProjectElaboration } from 'store/selectors'
import { heroDetails, setHeroResponse } from 'store/actions'

import { Hero } from 'components'

class HeroContainer extends Component {
  static propTypes = {
    hasConversation: PropTypes.bool,
    firstChoices: PropTypes.array,
    request: PropTypes.func,
    reply: PropTypes.func,
  }

  componentWillMount() {
    const { firstChoices, hasConversation, request } = this.props

    if (firstChoices.length === 0 && !hasConversation) {
      request()
    }
  }

  render() {
    const { hasConversation, firstChoices, reply } = this.props

    return <Hero {...{ firstChoices, reply, hasConversation }} />
  }
}

const mapStateToProps = state => ({
  hasConversation: fromProjectElaboration.getConversation(state).length !== 0,
  firstChoices: fromProjectElaboration.getFirstChoices(state),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    request: () => heroDetails.request(),
    reply: (text, payload) => setHeroResponse(text, payload),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer)
