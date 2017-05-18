import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { cloudinaryUrl } from 'config'
import messages from 'utils/messages'

import { MainLayout, AutoValidationBlock, MainWrapper, Link } from 'components'
import { PhoneAlreadyVerified, PhoneCodeForm } from 'containers'

const PhoneCodeValidationPage = ({ intl: { formatMessage } }) => (
  <MainLayout>
    <MainWrapper>
      <AutoValidationBlock
        dots
        imageLink={`${cloudinaryUrl}autovalidation-phone.svg`}
        title={formatMessage(messages('auto-validation.phone_code.title').label)}
        paragraph={formatMessage(messages('auto-validation.phone_code.message').label)}
      >
        <PhoneAlreadyVerified>
          <PhoneCodeForm />
          <Link to="/validation/phone" highlight><FormattedMessage id="user.change_phone_number" /></Link>
        </PhoneAlreadyVerified>
      </AutoValidationBlock>
    </MainWrapper>
  </MainLayout>
)

PhoneCodeValidationPage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(PhoneCodeValidationPage)
