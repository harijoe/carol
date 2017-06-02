import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

const styles = css`
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${theme('colors.grayscale.darker')};
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => React.createElement(ordered ? Ol : Ul, props, children)

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
}

export default List
