import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

export const fontSize = ({ height }) => `${height / 35.55}rem`

const styles = css`
  font-family: ${props => props.theme.fonts.primary};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: 0 0.44em;
  height: 2.22em;
  color: ${props => props.theme.colors.grayscale[0]};
  background-color: ${props => props.theme.reverseColors.grayscale[0]};
  border: 1px solid ${props => props.theme.colors.grayscale[3]};
  border-radius: 2px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props, type }) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} />
  }

  if (type === 'select') {
    return <StyledSelect {...props} />
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
