import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import AutoValidationBlock from 'components/AutoValidationBlock'
import Popin from 'containers/Popin'
import EmailForm from 'containers/EmailForm'
import injectTranslate from 'i18n/hoc/injectTranslate'

const EmailValidationPopin = ({ translate, show }) =>
  <Popin show={show}>
    <AutoValidationBlock
      secondDot
      imageLink={cloudinary('/autovalidation-mail.svg')}
      title={translate('auto-validation.mail.title')}
      paragraph={translate('auto-validation.mail.message')}
    >
      <EmailForm origin="validation-popin" />
    </AutoValidationBlock>
  </Popin>

EmailValidationPopin.propTypes = {
  translate: PropTypes.func.isRequired,
  show: PropTypes.bool,
}

export default injectTranslate(EmailValidationPopin)
