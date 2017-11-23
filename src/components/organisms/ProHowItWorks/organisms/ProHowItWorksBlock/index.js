import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Image, Heading } from 'components'

const StyledImage = styled(Image)`
  width: 100%;
  margin-bottom: 5rem;
`

const StyledHeading = styled(Heading)`
  font-size: ${theme('fonts.size.xl')};
`

const ProHowItWorksBlock = ({ imageLink, title, content }) =>
  <div>
    <StyledImage src={imageLink} />
    <StyledHeading level={3}>
      {title}
    </StyledHeading>
    {content}
  </div>

ProHowItWorksBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
}

export default ProHowItWorksBlock
