import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { cloudinaryUrl } from 'config'
import messages from 'utils/messages'

import { MainLayout, AutoValidationBlock, Section, MainWrapper } from 'components'
import { PhoneAlreadyVerified, PhoneForm } from 'containers'

const PhoneValidationPage = ({ intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <Section tall>
        <AutoValidationBlock
          firstDot
          imageLink={`${cloudinaryUrl}autovalidation-phone.svg`}
          title={formatMessage(messages('auto-validation.phone.title').label)}
          paragraph={formatMessage(messages('auto-validation.phone.message').label)}
        >
          <PhoneAlreadyVerified>
            <PhoneForm />
          </PhoneAlreadyVerified>
        </AutoValidationBlock>
      </Section>
    </MainWrapper>
  </MainLayout>
)

PhoneValidationPage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(PhoneValidationPage)
