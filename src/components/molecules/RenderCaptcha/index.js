import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import ReCAPTCHA from 'react-google-recaptcha'

import { Paragraph } from 'components'
import { google } from 'config'

const RenderCaptcha = ({ meta, input }) => (
  <div>
    <ReCAPTCHA
      sitekey={google.recaptchaKey}
      onChange={response => input.onChange(response !== null)}
    />
    <Paragraph>{meta.touched && meta.error && <FormattedMessage id={meta.error.id} values={meta.error.values} />}</Paragraph>
  </div>
)

RenderCaptcha.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.shape({
      id: PropTypes.string,
      values: PropTypes.object,
    }),
  }).isRequired,
}

export default RenderCaptcha
