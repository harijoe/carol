import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Paragraph } from 'components'

const StyledParagraph = styled(Paragraph)`
  a {
    text-decoration: none;
    cursor: pointer;
    position: relative;
    padding-left: ${theme('spaces.xs')};
    padding-right: ${theme('spaces.xs')};
    box-shadow: inset 0 -0.6rem 0 rgba(51, 51, 254, 0.2);
    color: inherit;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: none;
      color: ${theme('colors.white')};
      box-shadow: inset 0 -6rem 0 rgba(51, 51, 254, 1);
    }
  }
`

const WordPressPostContent = ({ content }) =>
  <StyledParagraph dangerouslySetInnerHTML={{ __html: content }} />

WordPressPostContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default WordPressPostContent
