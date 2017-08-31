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

  span {
    vertical-align: middle;
  }

  &.qs-Field--validated {
    color: ${theme('colors.success')};

    .check-color1 {
      fill: currentColor;
    }
  }

  &.qs-Field--toValidate {
    color: ${theme('colors.danger')};
    cursor: pointer;

    > span:nth-child(2) {
      box-shadow: inset 0 -0.1rem 0 rgba(211, 47, 47, 1);
      transition: all 0.3s ease;
      padding: 0.2rem;

      &:hover {
        color: ${theme('colors.white')};
        box-shadow: inset 0 -6rem 0 rgba(211, 47, 47, 1);
      }
    }

    .error-icon {
      fill: currentColor;
    }


  }
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};
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
