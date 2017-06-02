import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image, Heading } from 'components'

const StyledImage = styled(Image)`
  width: 100%;
`

const HowItWorksBlock = ({ imageLink, title, content }) => (
  <div>
    <StyledImage link={imageLink} />
    <Heading level={3}>{title}</Heading>
    {content}
  </div>
)

HowItWorksBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default HowItWorksBlock
