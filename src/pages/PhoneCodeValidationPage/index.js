import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import cloudinary from 'utils/cloudinary'
import injectTranslate from 'i18n/hoc/injectTranslate'

import MainLayout from 'layouts/MainLayout'
import AutoValidationBlock from 'components/AutoValidationBlock'
import Section from 'components/Section'
import MainWrapper from 'components/MainWrapper'
import Link from 'components/Link'
import PhoneAlreadyVerified from 'containers/PhoneAlreadyVerified'
import PhoneCodeForm from 'containers/PhoneCodeForm'

const PhoneCodeValidationPage = ({ translate }) =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Section>
        <AutoValidationBlock
          firstDot
          imageLink={cloudinary('/autovalidation-phone.svg')}
          title={translate('auto-validation.phone_code.title')}
          paragraph={translate('auto-validation.phone_code.message')}
        >
          <PhoneAlreadyVerified>
            <PhoneCodeForm />
            <Link to="/validation/phone" highlight>
              <FormattedMessage id="user.change_phone_number" />
            </Link>
          </PhoneAlreadyVerified>
        </AutoValidationBlock>
      </Section>
    </MainWrapper>
  </MainLayout>

PhoneCodeValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(PhoneCodeValidationPage)
