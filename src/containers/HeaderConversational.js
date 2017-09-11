import React from 'react'
import { connect } from 'react-redux'
import { fromProjectElaboration } from 'store/selectors'

import { HeaderConversational } from 'components'

const HeaderConversationalContainer = props => <HeaderConversational {...props} />

const mapStateToProps = state => ({
  partnerHeaderText: fromProjectElaboration.getPartnerHeaderText(state),
  partnerHeaderLink: fromProjectElaboration.getPartnerHeaderLink(state),
  partnerWebsite: fromProjectElaboration.getPartnerHeaderWebsite(state),
})

export default connect(mapStateToProps)(HeaderConversationalContainer)
