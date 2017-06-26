import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { fromStatus } from 'store/selectors'
import { projectAcceptFirm, PROJECT_ACCEPT_FIRM } from 'store/actions'
import { Button } from 'components'

const FirmAcceptButton = ({ loading, request }) => (
  <Button {...{ loading, onClick: request }} center maxWidth large><FormattedMessage id="project.validation_page" /></Button>
)

const mapStateToProps = state => ({
  loading: fromStatus.isLoading(state, PROJECT_ACCEPT_FIRM.prefix),
})

const mapDispatchToProps = (dispatch, { projectId }) => ({
  request: () => dispatch(projectAcceptFirm.request(projectId)),
})

FirmAcceptButton.propTypes = {
  loading: PropTypes.bool,
  request: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FirmAcceptButton)
