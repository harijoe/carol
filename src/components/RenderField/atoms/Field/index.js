import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { theme, ifThen, breakpoint, breakpointMax } from 'utils/style'

import Label from 'components/Label'
import Input from 'components/Input'
import Block from 'components/Block'
import IconLink from 'components/IconLink'

const Error = styled(Block)`
  margin: 0.5rem 0 0;
  font-size: ${theme('fonts.size.s')};
  background: none;
  color: ${theme('colors.danger')};
`

const Wrapper = styled.div`
  ${({ type, smallSize, mediumSize }) => css`
  position: relative;
  margin-bottom: ${theme('spaces.xs')};
  padding-bottom: ${theme('spaces.m')};

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }

  label {
    vertical-align: top;
  }

  fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  ${ifThen(
    type === 'select',
    css`
    fieldset {
      background: transparent;
    }
  `,
    '',
  )}
  ${ifThen(
    type === 'checkbox',
    css`
    ${breakpointMax('l')`
      vertical-align: top;

      label {
        width: 90%;
      }
    `}
  `,
    '',
  )}
  ${ifThen(
    smallSize,
    css`
    ${breakpoint('m')`
      width: 30%;
    `}
  `,
  )};

  ${ifThen(
    mediumSize,
    css`
    ${breakpoint('m')`
      width: 50%;
    `}
  `,
  )};
`};
`

const StyledInput = styled(Input)`
  padding: 0 ${theme('spaces.l')} 0 0;
  height: 3.2rem;
  width: 100%;
  font-size: ${theme('fonts.size.base')};
  color: ${theme('colors.grayscale.darker')};
`

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
  visibility: ${ifThen(hideLabel, 'hidden', 'visible')};
  font-weight: bold;
  font-size: ${theme('fonts.size.base')};
  line-height: 1;
  color: ${theme('colors.black')};

  ${ifThen(
    lightFont,
    css`
      font-weight: normal;
    `,
  )}

  ${ifThen(
    inline,
    css`
      display: inline-block;
    `,
    css`
      display: block;
    `,
  )}
`}`

const Field = ({
  error,
  name,
  invalid,
  label,
  hideLabel,
  lightFont,
  inline,
  onIconClick,
  type,
  icon,
  smallSize,
  mediumSize,
  alt,
  ...props
}) => {
  const inputProps = { id: name, name, type, invalid, 'aria-describedby': `${name}Error`, ...props }
  const renderInputFirst = type === 'checkbox' || type === 'radio'

  return (
    <Wrapper {...{ type, smallSize, mediumSize }}>
      {renderInputFirst && <Input {...inputProps} />}
      {label &&
        <StyledLabel {...{ hideLabel, lightFont, inline }} htmlFor={inputProps.id}>
          {label}
        </StyledLabel>}
      <fieldset>
        {!renderInputFirst && <StyledInput {...inputProps} />}
        {icon && <StyledIconLink title={alt} onClick={onIconClick} {...{ icon }} />}
      </fieldset>
      {invalid &&
        error &&
        <Error id={`${name}Error`} role="alert" color="danger" transparent>
          <FormattedMessage id={error.id} values={error.values} />
        </Error>}
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
  smallSize: PropTypes.bool,
  mediumSize: PropTypes.bool,
  onIconClick: PropTypes.func,
  alt: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
}

export default Field
