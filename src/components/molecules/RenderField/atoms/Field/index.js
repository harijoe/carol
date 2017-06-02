import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen } from 'utils/style'

import { Label, Input, Block, IconLink } from 'components'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
  font-size: ${theme('fonts.size.s')};
  background: none;
  color: ${theme('colors.danger')};
`

const Wrapper = styled.div`${({ type }) => css`
  position: relative;
  margin-bottom: ${theme('spaces.m')};
  padding-bottom: ${theme('spaces.m')};

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }

  label {
    vertical-align: middle;
  }

  fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  ${ifThen(type === 'select', css`
    fieldset {
      background: transparent;
    }
  `
  , '')}
`}`

const StyledInput = styled(Input)`${({ hideBorder }) => css`
  padding: 0 ${theme('spaces.l')} 0 0;
  height: 3.2rem;
  width: 100%;
  font-size: ${theme('fonts.size.base')};
  color: ${theme('colors.grayscale.darker')};

  ${ifThen(hideBorder, '', css`
    border-bottom: 0.1rem solid ${theme('colors.grayscale.light')};
    transition: all 0.3s ease;

    &:focus{
      border-color: ${theme('colors.primary')};
      outline: none;
    }
  `)};
`}`

const StyledIconLink = styled(IconLink)`
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: calc(${theme('icons.size.s')} / -2);
  display: inline-block;
  height: ${theme('icons.size.s')};
  width: ${theme('icons.size.s')};

  span {
    height: 100%;
    width: 100%;
  }

  svg .qs-header-cnx {
    fill: ${theme('colors.grayscale.dark')};
  }
`

const StyledLabel = styled(Label)`${({ hideLabel, lightFont, inline }) => css`
  margin-bottom: ${theme('spaces.s')};
  visibility: ${ifThen(hideLabel, 'hidden', 'visible')};
  font-family: ${theme('fonts.family.montserratBold')};
  font-size: ${theme('fonts.size.base')};
  line-height: 1rem;
  color: ${theme('colors.black')};

  ${ifThen(lightFont,
    css`
      font-family: ${theme('fonts.family.montserratLight')};
    `,
    css`
      font-family: ${theme('fonts.family.montserratBold')};
    `
  )}

  ${ifThen(inline,
    css`
      display: inline-block;
    `,
    css`
      display: block;
    `
  )}
`}`

const Field = ({ error, name, invalid, label, hideLabel, lightFont, inline, hideBorder, onIconClick, type, icon, ...props }) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'

  return (
    <Wrapper {...{ hideBorder, type }}>
      {renderInputFirst && <Input {...inputProps} />}
      {label &&
        <StyledLabel {...{ hideLabel, lightFont, inline }} htmlFor={inputProps.id}>{label}</StyledLabel>
      }
      <fieldset>
        {renderInputFirst ||
          <StyledInput {...inputProps} />
        }
        {icon &&
          <StyledIconLink onClick={onIconClick} {...{ icon }} />
        }
      </fieldset>
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
  lightFont: PropTypes.bool,
  inline: PropTypes.bool,
  hideBorder: PropTypes.bool,
  onIconClick: PropTypes.func,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
