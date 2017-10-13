import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

const stylesWithoutBorder = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 0 0.44em;
  height: 2.22em;
  color: ${theme('colors.grayscale.darkest')};
  background: none;
  border: none;

  &[type=checkbox],
  &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const styles = css`
  ${stylesWithoutBorder}
  
  border-bottom: 0.1rem solid ${theme('colors.grayscale.light')};
  transition: all 0.3s ease;

  &:focus{
    border-color: ${theme('colors.primary')};
    outline: none;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`
const StyledCheckbox = styled.input`${stylesWithoutBorder}`

const Input = props => {
  const { type } = props

  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  }

  if (type === 'select') {
    return <StyledSelect {...props} />
  }

  if (type === 'checkbox') {
    return <StyledCheckbox {...props} />
  }

  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  height: 40,
}

export default Input
