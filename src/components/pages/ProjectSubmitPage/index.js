import React from 'react'
import { FormattedMessage } from 'react-intl'

import { PageTemplate, Header, Footer } from 'components'
import { ProjectForm } from 'containers'

const ProjectSubmitPage = (props) => {
  return (
  	<PageTemplate header={<Header {...props} />} footer={<Footer />}>
      <FormattedMessage id="project.validation_page" tagName="p" />
      <ProjectForm {...props} />
    </PageTemplate>
  )
}

export default ProjectSubmitPage
