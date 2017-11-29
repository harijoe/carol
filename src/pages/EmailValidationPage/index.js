import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import injectTranslate from 'i18n/hoc/injectTranslate'

import MainLayout from 'layouts/MainLayout'
import MainWrapper from 'components/MainWrapper'
import Section from 'components/Section'
import AutoValidationBlock from 'components/AutoValidationBlock'
import EmailForm from 'containers/EmailForm'

const EmailValidationPage = ({ translate }) =>
  <MainLayout>
    <MainWrapper paddingTop="m">
      <Section>
        <AutoValidationBlock
          secondDot
          imageLink={cloudinary('/autovalidation-mail.svg')}
          title={translate('auto-validation.mail.title')}
          paragraph={translate('auto-validation.mail.message')}
        >
          <EmailForm origin="validation-page" />
        </AutoValidationBlock>
      </Section>
    </MainWrapper>
  </MainLayout>

EmailValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(EmailValidationPage)
