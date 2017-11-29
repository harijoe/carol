import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen, breakpointMax } from 'utils/style'

import Heading from 'components/Heading'
import Section from 'components/Section'

const Wrapper = styled.header`
  ${({ imageLink, dark }) => css`
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
    background-color: ${theme('colors.primary')};
    opacity: 0.85;

    ${ifThen(
    dark,
    css`
      background-color: ${theme('colors.black')};
      opacity: 0.5;
    `,
    )}
  }

  ${breakpoint('l')`
    min-height: 25rem;
  `}
`};
`

const StyledSection = styled(Section)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 120rem;
  width: 100%;
  background-color: transparent;
`

const InnerWrapper = styled.div``

const StyledHeading = styled(Heading)`
  color: ${theme('colors.white')};
  line-height: 1.25;

  ${breakpointMax('m')`
    font-size: ${theme('fonts.size.xxl')};
  `}
`

const HeroSection = ({ title, imageLink, dark, children, ...props }) =>
  <Wrapper imageLink={imageLink} dark={dark} {...props}>
    <StyledSection>
      <InnerWrapper>
        {title != null &&
        <StyledHeading level={1} className="qs-Hero-title">
          {title}
        </StyledHeading>}
        {children}
      </InnerWrapper>
    </StyledSection>
  </Wrapper>

HeroSection.propTypes = {
  title: PropTypes.string,
  imageLink: PropTypes.string,
  dark: PropTypes.bool,
  children: PropTypes.any,
}

export default HeroSection
