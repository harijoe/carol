import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { addNotification as notify } from 'reapop'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { injectIntl, intlShape } from 'react-intl'

import messages from 'utils/messages'
import { submitProject } from 'store/actions'
import { fromProject } from 'store/selectors'
import { ProjectForm } from 'components'

class ProjectFormContainer extends Component {
  componentWillReceiveProps (nextProps) {
    const type = (nextProps.status) ? 'success' : 'failed'
    const { intl: { formatMessage } } = nextProps

    this.props.notify({
      title: formatMessage(messages(`project.submit_${type}_title`).label),
      message: formatMessage(messages(`project.submit_${type}`).label),
      status: type,
    })

    if (nextProps.status) { this.props.redirectTo('/project') }
  }

  render() {
    return (
      <ProjectForm onClick={this.props.request} />
    )
  }
}

ProjectFormContainer.propTypes = {
  request: PropTypes.func.isRequired,
  notify: PropTypes.func,
  redirectTo: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

const mapStateToProps = state => ({
  status: fromProject.getStatus(state),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    request: submitProject.request,
    notify,
    redirectTo: path => push(path),
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ProjectFormContainer))

