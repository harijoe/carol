import React from 'react'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import { FirmListItem } from 'components'

const FirmItemContainer = props => <FirmListItem {...props} />

const mapStateToProps = state => ({
  proPageEnabled: fromContext.getLang(state) === 'fr' || fromContext.getLang(state) === 'en',
})

export default connect(mapStateToProps)(FirmItemContainer)
