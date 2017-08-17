import React from 'react'
import { connect } from 'react-redux'
import { clickOnFindAPro } from 'store/actions'

import { FindAProLink } from 'components'

const FindAProLinkContainer = props => <FindAProLink {...props} />

const mapDispatchToProps = dispatch => ({
  redirectToConversation: () => dispatch(clickOnFindAPro()),
})

export default connect(null, mapDispatchToProps)(FindAProLinkContainer)
