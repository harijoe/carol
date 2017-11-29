import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'
import Heading from 'components/Heading'

const StyledImage = styled(Image)`
  width: 100%;
  margin-bottom: 5rem;
`

const HowItWorksBlock = ({ imageLink, title, content }) =>
  <div>
    <StyledImage src={imageLink} />
    <Heading level={2}>
      {title}
    </Heading>
    {content}
  </div>

HowItWorksBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default HowItWorksBlock
