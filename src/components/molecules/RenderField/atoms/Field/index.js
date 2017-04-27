import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpoint } from 'utils/style'

import { Label, Input, Block, Icon } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
  background: none;
  color: ${theme('colors.danger')};
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
  border-bottom: 1px solid ${theme('colors.grayscale.medium')};
  padding-bottom: 5px;
  
  ${breakpoint('m')`
    max-width: ${theme('ui.size.m')};
  `}
`

const StyledInput = styled(Input)`
  display: inline-block;
  width: 90%;
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  width: 9%;
`

const StyledLabel = styled(Label)`${({ hideLabel }) => css`
  visibility: ${ifThen(hideLabel, 'hidden', 'visible')};
`}`

const Field = ({ error, name, invalid, label, hideLabel, type, icon, ...props }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'

  return (
    <Wrapper>
      {renderInputFirst && <Input {...inputProps} />}
      {label &&
        <StyledLabel hideLabel={hideLabel} htmlFor={inputProps.id}>{label}</StyledLabel>
      }
      {renderInputFirst ||
        <StyledInput {...inputProps} />
      }
      {icon &&
        <StyledIcon icon={icon} />
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
}

Field.defaultProps = {
  type: 'text',
}

export default Field
