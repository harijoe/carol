import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import cloudinary from 'utils/cloudinary'

import { MainLayout, AutoValidationBlock, Section, MainWrapper, InnerWrapper } from 'components'
import { PhoneAlreadyVerified, PhoneForm } from 'containers'

const PhoneValidationPage = ({ translate }) =>
  <MainLayout>
    <MainWrapper>
      <InnerWrapper>
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
      </InnerWrapper>
    </MainWrapper>
  </MainLayout>

PhoneValidationPage.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(PhoneValidationPage)
