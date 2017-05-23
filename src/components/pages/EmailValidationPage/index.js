import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { cloudinaryUrl } from 'config'
import messages from 'utils/messages'

import { MainLayout, MainWrapper, AutoValidationBlock } from 'components'
import { EmailForm } from 'containers'

const EmailValidationPage = ({ intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <AutoValidationBlock
        secondDot
        imageLink={`${cloudinaryUrl}autovalidation-mail.svg`}
        title={formatMessage(messages('auto-validation.mail.title').label)}
        paragraph={formatMessage(messages('auto-validation.mail.message').label)}
      >
        <EmailForm />
      </AutoValidationBlock>
    </MainWrapper>
  </MainLayout>
)

EmailValidationPage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(EmailValidationPage)
