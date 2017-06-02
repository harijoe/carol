import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Heading, Section } from 'components'

const Wrapper = styled.header`${({ imageLink }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 16rem;
  width: 100%;
  padding-top: 15rem;
  background: url(${imageLink}) no-repeat center top;
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background-color: #3333FE;
    opacity: 0.85;
  }

  ${breakpoint('l')`
    min-height: 25rem;
  `}
`}`

const StyledSection = styled(Section)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
`

const StyledHeading = styled(Heading)`
  color: ${theme('colors.white')};
`

const HeroSection = ({ title, imageLink }) => (
  <Wrapper imageLink={imageLink}>
    <StyledSection>
      <StyledHeading level={1}>{title}</StyledHeading>
    </StyledSection>
  </Wrapper>
)

HeroSection.propTypes = {
  title: PropTypes.string,
  imageLink: PropTypes.string,
}

export default HeroSection
