import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userDetails, projectDetails, projectUpdate } from 'store/actions'
import { fromUser, fromProject } from 'store/selectors'
import { createValidator, required } from 'services/validation'

import { ProjectAccountForm } from 'components'

class ProjectAccountFormContainer extends Component {
  static propTypes = {
    requestUserDetails: PropTypes.func,
    requestProjectDetails: PropTypes.func,
  }

  componentDidMount() {
    this.props.requestUserDetails()
    this.props.requestProjectDetails()
  }

  render() {
    return (
      <ProjectAccountForm {...this.props} />
    )
  }
}

const mapStateToProps = (state, { projectId }) => ({
  initialValues: {
    userId: fromUser.getId(state),
    gender: fromUser.getGender(state),
    firstName: fromUser.getFirstName(state),
    lastName: fromUser.getLastName(state),
    startTimeframe: fromProject.getStartTimeframe(state, projectId),
    purpose: fromProject.getPurpose(state, projectId),
    projectId: fromProject.getProjectId(state, projectId),
    contactPreference: fromUser.getContactPreference(state),
    contactComment: fromUser.getContactComment(state),
  },
})

const onSubmit = (values, dispatch) => {
  const { gender, firstName, lastName, startTimeframe, purpose, contactPreference, contactComment, userId, projectId } = values

  dispatch(projectUpdate.request({
    startTimeframe,
    purpose,
  }, {
    gender,
    firstName,
    lastName,
    contactPreference,
    contactComment,
  }, projectId, userId))
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
  requestUserDetails: () => dispatch(userDetails.request()),
  requestProjectDetails: () => dispatch(projectDetails.request(projectId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(ProjectAccountFormContainer))
