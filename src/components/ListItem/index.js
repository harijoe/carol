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

const li = styled.li`${styles};`

const ListItem = ({ children, ...props }) => React.createElement(li, props, children)

ListItem.propTypes = {
  children: PropTypes.any,
}

export default ListItem
