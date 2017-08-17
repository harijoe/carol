import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme } from 'utils/style'

import { Label, Block } from 'components'

const StyledLabel = styled(Label)`
  display: inline-block;
  padding-left: ${theme('spaces.m')};
  font-size: ${theme('fonts.size.base')};
  color: ${theme('colors.grayscale.darker')};
`

const Error = styled(Block)`
  margin: 0.5rem 0 0;
  font-size: ${theme('fonts.size.s')};
  background: none;
  color: ${theme('colors.danger')};
`

/*
 Special component for radio buttons : https://goo.gl/MxF02g
 */
const RadioGroup = ({ input, meta, options }) => {
  const invalid = meta.touched && !!meta.error
  const error = meta.error

  return (
    <div>
      {options.map(({ value, translation, id }) =>
        <fieldset key={value}>
          <input type="radio" {...input} id={id} value={value} checked={value === input.value} />
          <StyledLabel htmlFor={id}>
            <FormattedMessage id={translation} />
          </StyledLabel>
        </fieldset>,
      )}
      {invalid &&
        error != null &&
        <Error role="alert" color="danger" transparent>
          <FormattedMessage id={error.id} values={error.values} />
        </Error>}
    </div>
  )
}

RadioGroup.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  options: PropTypes.array,
}

export default RadioGroup
