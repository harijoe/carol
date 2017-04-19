import React from 'react'
import { FormattedMessage } from 'react-intl'

import { MainLayout } from 'components'
import { ProjectSubmitForm } from 'containers'

const ProjectSubmitPage = props => (
  <MainLayout>
    <FormattedMessage id="project.validation_page" tagName="p" />
    <ProjectSubmitForm {...props} />
  </MainLayout>
)

export default ProjectSubmitPage
