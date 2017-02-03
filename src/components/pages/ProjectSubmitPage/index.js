import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'
import { ProjectSubmitForm } from 'containers'

const ProjectSubmitPage = props => (
  <PageTemplate header={<Header {...props} />} footer={<Footer />}>
    <FormattedMessage id="project.validation_page" tagName="p" />
    <ProjectSubmitForm {...props} />
  </PageTemplate>
)

export default ProjectSubmitPage
