import React, { PropTypes } from 'react'

import Field from './atoms/Field'

const RenderField = ({ meta, input, ...props }) => (
  <Field {...{ ...props, ...input, invalid: meta.touched && !!meta.error, error: meta.error }} />
)

RenderField.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.shape({
      id: PropTypes.string,
      values: PropTypes.object,
    }),
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default RenderField
