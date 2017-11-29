import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from 'utils/style'

const styles = css`
  margin: ${theme('spaces.m')} 0;
  padding-left: 0;
  line-height: 1.7rem;
  list-style-position: inside;
  color: ${theme('colors.grayscale.darker')};

  li {
    padding-top: ${theme('spaces.m')};

    &:first-child {
      padding-top: 0;
    }
  }

  ul,
  ol {
    padding-left: ${theme('spaces.m')};
  }
`

const Ol = styled.ol`${styles};`
const Ul = styled.ul`${styles};`

const List = ({ ordered, children, ...props }) => React.createElement(ordered ? Ol : Ul, props, children)

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
}

export default List
