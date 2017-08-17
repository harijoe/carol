import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { Button } from 'components'

const ProjectForm = props =>
  <Button onClick={props.onClick}>
    <FormattedMessage id="project.submit_button" />
  </Button>

ProjectForm.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ProjectForm
