import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNotification as notify } from 'reapop'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { injectIntl, intlShape } from 'react-intl'

import messages from 'utils/messages'
import { projectSubmit } from 'store/actions'
import { fromProject } from 'store/selectors'
import { ProjectForm } from 'components'

class ProjectSubmitFormContainer extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
    notify: PropTypes.func,
    redirectTo: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    const type = (nextProps.status) ? 'success' : 'failed'
    const { intl: { formatMessage } } = nextProps

    this.props.notify({
      title: formatMessage(messages(`project.submit_${type}_title`).label),
      message: formatMessage(messages(`project.submit_${type}`).label),
      status: type,
    })

    // eslint-disable-next-line react/prop-types
    if (nextProps.status) { this.props.redirectTo('/projects') }
  }

  render() {
    return (
      <ProjectForm onClick={this.props.request} />
    )
  }
}

const mapStateToProps = state => ({
  status: fromProject.getStatus(state),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    request: projectSubmit.request,
    notify,
    redirectTo: path => push(path),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ProjectSubmitFormContainer))

