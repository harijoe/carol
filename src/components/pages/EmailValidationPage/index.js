import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { MainLayout, MainWrapper, InnerWrapper, Section, AutoValidationBlock } from 'components'
import { EmailForm } from 'containers'

const EmailValidationPage = ({ translate }) => (
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
        <Section>
          <AutoValidationBlock
            secondDot
            imageLink={cloudinary('/autovalidation-mail.svg')}
            title={translate('auto-validation.mail.title')}
            paragraph={translate('auto-validation.mail.message')}
          >
            <EmailForm />
          </AutoValidationBlock>
        </Section>
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>
)

EmailValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(EmailValidationPage)
