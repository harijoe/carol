import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Image, Heading, Paragraph, Dots } from 'components'

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
  margin-bottom: ${theme('spaces.xl')};
  width: auto;
  max-height: 12rem;
`

const DotsWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: ${theme('spaces.m')} auto;
  text-align: center;
`

const AutoValidationBlock = ({ imageLink, title, paragraph, children, firstDot, secondDot }) => (
  <Container>
    <Wrapper>
      {firstDot &&
        <DotsWrapper>
          <Dots focus />
          <Dots />
        </DotsWrapper>
      }
      {secondDot &&
        <DotsWrapper>
          <Dots />
          <Dots focus />
        </DotsWrapper>
      }
      <StyledImage src={imageLink} />
      <Heading level={2}>{title}</Heading>
      <Paragraph>{paragraph}</Paragraph>
      {children}
    </Wrapper>
  </Container>
)

AutoValidationBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  children: PropTypes.any,
  firstDot: PropTypes.bool,
  secondDot: PropTypes.bool,
}

export default AutoValidationBlock
