import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Image, Heading, Paragraph, Link } from 'components'

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding-left: ${theme('spaces.m')};
  padding-right: ${theme('spaces.m')};

  ${breakpoint('s')`
    padding: 0;
  `}
`

const Container = styled.div`
  padding-bottom: ${theme('spaces.xxl')};
  padding-top: ${theme('spaces.xxxl')};
  margin: 0 auto;
  background: white;
`

const StyledImage = styled(Image)`
  margin-bottom: ${theme('spaces.xxl')};
  width: auto;
  max-height: 12rem;
`

const StyledLink = styled(Link)`
  width: 100%;

  ${breakpoint('s')`
    min-width: 40rem;
  `}
`

const AutoValidationBlock = ({ imageLink, title, paragraph, callToAction }) => (
  <Container>
    <Wrapper>
      <StyledImage link={imageLink} />
      <Heading level={2}>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      <StyledLink button>{callToAction}</StyledLink>
    </Wrapper>
  </Container>
)

AutoValidationBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  callToAction: PropTypes.string,
}

export default AutoValidationBlock
