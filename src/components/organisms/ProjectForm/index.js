import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

import { Link } from 'components'

const ProjectForm = props => (
  <Link onClick={props.onClick}><FormattedMessage id="project.submit_button" /></Link>
)

ProjectForm.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ProjectForm
