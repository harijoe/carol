import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const Wrapper = styled.div`
  display: inline-block;
  margin: 0;
  padding: ${theme('spaces.xs')} ${theme('spaces.s')};
  font-size: ${theme('fonts.size.s')};
  border-radius: 60rem;

  span {
    vertical-align: middle;
  }

  &.qs-Field--validated {
    background-color: ${theme('colors.success')};
    color: ${theme('colors.white')};
  }

  &.qs-Field--toValidate {
    background-color: ${theme('colors.danger')};
    color: ${theme('colors.white')};
  }
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};

  .error-icon, .check-color1 {
    fill: ${theme('colors.white')};
  }
`

const ValidatedInfo = ({ validated, field, ...props }) => {
  const validateState = validated ? 'validated' : 'not-validated'
  const validateClass = validated ? 'qs-Field--validated' : 'qs-Field--toValidate'

  return (
    <Wrapper className={validateClass} {...props}>
      <StyledIcon icon={validateState} size={21} />
      <FormattedMessage id={`user.profile.${field}.${validateState}`} />
    </Wrapper>
  )
}

ValidatedInfo.propTypes = {
  validated: PropTypes.bool,
  field: PropTypes.string.isRequired,
}

export default ValidatedInfo
