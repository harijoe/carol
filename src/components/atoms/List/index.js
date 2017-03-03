import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = css`
  font-family: ${props => props.theme.fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${props => props.theme.colors.grayscale[0]};
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => React.createElement(ordered ? Ol : Ul, props, children)

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
}

export default List
