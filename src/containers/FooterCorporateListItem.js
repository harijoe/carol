import React from 'react'
import { connect } from 'react-redux'
import { clickOnFindAPro } from 'store/actions'

import FooterCorporateListItem from 'components/Footer/molecules/FooterCorporateListItem'

const FooterCorporateListItemContainer = props => <FooterCorporateListItem {...props} />

const mapDispatchToProps = dispatch => ({
  redirectToConversation: () => dispatch(clickOnFindAPro()),
})

export default connect(null, mapDispatchToProps)(FooterCorporateListItemContainer)
