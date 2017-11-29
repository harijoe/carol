import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import cloudinary from 'utils/cloudinary'
import { FormattedMessage } from 'react-intl'
import AutoValidationBlock from 'components/AutoValidationBlock'
import Link from 'components/Link'
import Popin from 'containers/Popin'
import PhoneForm from 'containers/PhoneForm'
import PhoneCodeForm from 'containers/PhoneCodeForm'
import injectTranslate from 'i18n/hoc/injectTranslate'

const StyledLink = styled(Link)`
  align-self: flex-start;
  height: 1.8rem;
  margin-top: ${theme('spaces.s')};
`

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
        <StyledLink onClick={() => setMode('phone')} highlight>
          <FormattedMessage id="user.change_phone_number" />
        </StyledLink>
      </AutoValidationBlock>}
  </Popin>

PhoneValidationPopin.propTypes = {
  translate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  show: PropTypes.bool,
}

export default injectTranslate(PhoneValidationPopin)
