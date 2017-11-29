import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'utils/style'
import styled from 'styled-components'

import Heading from 'components/Heading'
import RichTextContent from 'components/RichTextContent'

const Wrapper = styled.div`padding: ${theme('spaces.m')};`

const SimpleCardContent = ({ title, content, ...props }) =>
  <Wrapper {...props}>
    <Heading className="title" level={3}>
      {title}
    </Heading>
    <RichTextContent content={content} />
  </Wrapper>

SimpleCardContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

export default SimpleCardContent
