import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpoint } from 'utils/style'

import { Label, Input, Block, IconLink } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
  background: none;
  color: ${theme('colors.danger')};
`

const Wrapper = styled.div`${({ hideBorder }) => css`
  margin-bottom: 2rem;
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
  ${ifThen(hideBorder, '', css`
    border-bottom: 1px solid ${theme('colors.grayscale.light')};
  `)};
  padding-bottom: 5px;
  
  ${breakpoint('m')`
    max-width: ${theme('ui.size.m')};
  `}
`}`

const StyledInput = styled(Input)`
  display: inline-block;
  width: 90%;
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  width: 9%;
`

const StyledLabel = styled(Label)`${({ hideLabel }) => css`
  visibility: ${ifThen(hideLabel, 'hidden', 'visible')};
  font-family: ${theme('fonts.family.montserratLight')};
  font-size: 1.4rem;
  line-height: 1rem;
  color: ${theme('colors.grayscale.dark')};
`}`

const Field = ({ error, name, invalid, label, hideLabel, hideBorder, onIconClick, type, icon, ...props }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'

  return (
    <Wrapper {...{ hideBorder }}>
      {renderInputFirst && <Input {...inputProps} />}
      {label &&
        <StyledLabel hideLabel={hideLabel} htmlFor={inputProps.id}>{label}</StyledLabel>
      }
      {renderInputFirst ||
        <StyledInput {...inputProps} />
      }
      {icon &&
        <StyledIconLink onClick={onIconClick} {...{ icon }} />
      }
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" color="danger" transparent>
          <FormattedMessage id={error.id} values={error.values} />
        </Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.shape({
    id: PropTypes.string,
    values: PropTypes.object,
  }),
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  hideLabel: PropTypes.bool,
  hideBorder: PropTypes.bool,
  onIconClick: PropTypes.func,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
