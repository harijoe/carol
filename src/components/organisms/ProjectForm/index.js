import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Link } from 'components'

class ProjectForm extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    status: PropTypes.bool,
  }
  
  render () {
    return (
	    <Link onClick={this.props.onClick}><FormattedMessage id="project.submit_button" /></Link>
	  )
  }
}

export default ProjectForm
