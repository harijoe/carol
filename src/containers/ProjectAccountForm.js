import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { projectUpdate, checkValidationFlow } from 'store/actions'
import { fromUser, fromProject, fromStatus } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { ProjectAccountForm } from 'components'

class ProjectAccountFormContainer extends Component {
  static propTypes = {
    requestCheckValidationFlow: PropTypes.func,
  }

  componentWillMount() {
    this.props.requestCheckValidationFlow()
  }

  render() {
    return <ProjectAccountForm {...this.props} />
  }
}

const mapStateToProps = (state, { projectId }) => {
  const id = fromUser.getId(state)
  const project = fromProject.getDetails(state, `/projects/${projectId}`)

  return {
    initialValues: {
      gender: fromUser.getGender(state),
      firstName: fromUser.getFirstName(state),
      lastName: fromUser.getLastName(state),
      startTimeframe: fromProject.getStartTimeframe(state, `/projects/${projectId}`),
      purpose: fromProject.getPurpose(state, `/projects/${projectId}`),
      contactPreference: fromUser.getContactPreference(state),
      contactComment: fromUser.getContactComment(state),
    },
    disabled: id == null || project == null,
    loading: fromStatus.getLoading(state).PROJECT_UPDATE,
  }
}

const onSubmit = (values, dispatch, { projectId }) => {
  const { gender, firstName, lastName, startTimeframe, purpose, contactPreference, contactComment } = values

  dispatch(
    projectUpdate.request(
      {
        startTimeframe,
        purpose,
      },
      {
        gender,
        firstName,
        lastName,
        contactPreference,
        contactComment,
      },
      projectId,
    ),
  )
}

const validate = createValidator({
  lastName: [required],
  firstName: [required],
  gender: [required],
  startTimeframe: [required],
  purpose: [required],
  contactComment: [required],
  contactPreference: [required],
})

export const config = {
  form: 'ProjectAccountForm',
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

const mapDispatchToProps = (dispatch, { projectId }) => ({
  requestCheckValidationFlow: () => dispatch(checkValidationFlow(`/projects/${projectId}`)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProjectAccountFormContainer))
