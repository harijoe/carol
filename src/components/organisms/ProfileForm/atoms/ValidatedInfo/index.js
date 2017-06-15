import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Icon } from 'components'

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding-bottom: ${theme('spaces.s')};
  padding-top: ${theme('spaces.s')};

  &.qs-Field--validated {
    border-bottom: 0.2rem solid ${theme('colors.success')};
    border-top: 0.2rem solid ${theme('colors.success')};
    color: ${theme('colors.success')};
  }

  &.qs-Field--toValidate {
    border-bottom: 0.2rem solid ${theme('colors.danger')};
    border-top: 0.2rem solid ${theme('colors.danger')};
    color: ${theme('colors.danger')};
  }
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.m')};
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
`

const ValidatedInfo = ({ validated, field, ...props }) => {
  const validateState = validated ? 'validated' : 'error'
  const validateClass = validated ? 'qs-Field--validated' : 'qs-Field--toValidate'

  return (
    <Wrapper className={validateClass} {...props}>
      <StyledIcon icon={validateState} size={21} />
      <FormattedMessage id={`user.profile.${field}.${validateState}`} />
    </Wrapper>
  )
}

ValidatedInfo.propTypes = {
  validated: PropTypes.bool.isRequired,
  field: PropTypes.string.isRequired,
}

export default ValidatedInfo
