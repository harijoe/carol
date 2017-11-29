import React from 'react'
import { connect } from 'react-redux'

import { fromProjectElaboration } from 'store/selectors'
import AttachmentSummary from '../organisms/AttachmentSummary'

const AttachmentSummaryContainer = props => <AttachmentSummary {...props} />

const mapStateToProps = state => ({
  heroAnswer: fromProjectElaboration.getHeroAnswer(state),
  key2: fromProjectElaboration.getKey2(state),
})

export default connect(mapStateToProps)(AttachmentSummaryContainer)
