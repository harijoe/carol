import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'

import MainLayout from 'layouts/MainLayout'
import AutoValidationBlock from 'components/AutoValidationBlock'
import Section from 'components/Section'
import MainWrapper from 'components/MainWrapper'
import PhoneAlreadyVerified from 'containers/PhoneAlreadyVerified'
import PhoneForm from 'containers/PhoneForm'

const PhoneValidationPage = ({ translate }) =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Section>
        <AutoValidationBlock
          firstDot
          imageLink={cloudinary('/autovalidation-phone.svg')}
          title={translate('auto-validation.phone.title')}
          paragraph={translate('auto-validation.phone.message')}
        >
          <PhoneAlreadyVerified>
            <PhoneForm />
          </PhoneAlreadyVerified>
        </AutoValidationBlock>
      </Section>
    </MainWrapper>
  </MainLayout>

PhoneValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(PhoneValidationPage)
