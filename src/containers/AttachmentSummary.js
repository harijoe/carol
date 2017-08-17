import React from 'react'
import { connect } from 'react-redux'

import { AttachmentSummary } from 'components'
import { fromProjectElaboration } from 'store/selectors'

const AttachmentSummaryContainer = props => <AttachmentSummary {...props} />

const mapStateToProps = state => ({
  heroAnswer: fromProjectElaboration.getHeroAnswer(state),
})

export default connect(mapStateToProps)(AttachmentSummaryContainer)
