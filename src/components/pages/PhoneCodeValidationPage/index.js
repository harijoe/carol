import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import cloudinary from 'utils/cloudinary'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { MainLayout, AutoValidationBlock, InnerWrapper, Section, MainWrapper, Link } from 'components'
import { PhoneAlreadyVerified, PhoneCodeForm } from 'containers'

const PhoneCodeValidationPage = ({ translate }) => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <Section>
          <AutoValidationBlock
            firstDot
            imageLink={cloudinary('/autovalidation-phone.svg')}
            title={translate('auto-validation.phone_code.title')}
            paragraph={translate('auto-validation.phone_code.message')}
          >
            <PhoneAlreadyVerified>
              <PhoneCodeForm />
              <Link to="/validation/phone" highlight><FormattedMessage id="user.change_phone_number" /></Link>
            </PhoneAlreadyVerified>
          </AutoValidationBlock>
        </Section>
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

PhoneCodeValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(PhoneCodeValidationPage)
