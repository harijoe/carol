import React from 'react'
import messages from 'utils/messages'
import { injectIntl, intlShape } from 'react-intl'
import { cloudinaryUrl } from 'config'

import { MainLayout, MainWrapper, AutoValidationBlock } from 'components'

const ProjectValidationPage = ({ intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <AutoValidationBlock
        imageLink={`${cloudinaryUrl}autovalidation-validate.svg`}
        title={formatMessage(messages('auto-validation.validate.title').label)}
        paragraph={formatMessage(messages('auto-validation.validate.message').label)}
        callToAction={formatMessage(messages('auto-validation.validate.call_to_action').label)}
      />
    </MainWrapper>
  </MainLayout>
)

ProjectValidationPage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(ProjectValidationPage)
