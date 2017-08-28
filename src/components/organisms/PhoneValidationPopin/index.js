import React from 'react'
import PropTypes from 'prop-types'
import cloudinary from 'utils/cloudinary'
import { FormattedMessage } from 'react-intl'
import { AutoValidationBlock, Link } from 'components'
import { Popin, PhoneForm, PhoneCodeForm } from 'containers'
import injectTranslate from 'i18n/hoc/injectTranslate'

const PhoneValidationPopin = ({ translate, show, mode, setMode }) =>
  <Popin show={show}>
    {mode === 'phone' &&
      <AutoValidationBlock
        firstDot
        imageLink={cloudinary('/autovalidation-phone.svg')}
        title={translate('auto-validation.phone.title')}
        paragraph={translate('auto-validation.phone.message')}
      >
        <PhoneForm />
      </AutoValidationBlock>}
    {mode === 'phoneCode' &&
      <AutoValidationBlock
        firstDot
        imageLink={cloudinary('/autovalidation-phone.svg')}
        title={translate('auto-validation.phone_code.title')}
        paragraph={translate('auto-validation.phone_code.message')}
      >
        <PhoneCodeForm />
        <Link onClick={() => setMode('phone')} highlight>
          <FormattedMessage id="user.change_phone_number" />
        </Link>
      </AutoValidationBlock>}
  </Popin>

PhoneValidationPopin.propTypes = {
  translate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  show: PropTypes.bool,
}

export default injectTranslate(PhoneValidationPopin)
