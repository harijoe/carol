import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme, ifThen, breakpointMax } from 'utils/style'

import { Card, Paragraph } from 'components'

const styles = ({ orientation }) => css`
  ${ifThen(
    orientation === 'portrait',
    css`
      background-color: ${theme('colors.black')};
      color: ${theme('colors.white')};
    `,
  )}

  ${ifThen(
    orientation === 'landscape',
    css`
      flex-direction: row;
    `,
  )}
`

const StyledCard = styled(Card)`${styles}`

const StyledCardHeader = styled(Card.Header)`
  ${({ orientation }) => css`
    background-color: ${theme('colors.content.guide')};

    ${ifThen(
      orientation === 'landscape',
      css`
        height: 100%;
        width: 50%;
      `,
    )}
  `}
`

const StyledCardBody = styled(Card.Body)`
  ${({ orientation }) => css`
    ${ifThen(
      orientation === 'landscape',
      css`
        height: 100%;
        width: 50%;
      `,
    )}
  `}
`

const StyledCardImage = styled(Card.Image)`
  img {
    bottom: 9rem;
  }

  &::before, &::after {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    content: '';
  }

  &::before {
    z-index: 2;
    box-shadow: inset 0 0 0 4px ${theme('colors.content.guide')};
  }

  &::after {
    bottom: -1.5rem;
    top: auto;
    height: 8.5rem;
    width: 100%;
    background-color: ${theme('colors.content.guide')};
    transform: skewY(10deg);
  }
`

const Content = styled(Paragraph)`
  max-height: 10rem; 
  margin: 0;
  color: ${theme('colors.grayscale.dark')};
  overflow: hidden;
  text-overflow: ellipsis;

  ${breakpointMax('m')`
    font-size: ${theme('fonts.size.s')};
  `}
`

const GuideCard = ({ title, label, image, description, className, orientation, ...props }) =>
  <StyledCard className={className} padding="fluid-small" orientation={orientation} {...props}>
    <StyledCardHeader orientation={orientation}>
      <StyledCardImage image={image} />
      <Card.Tag label={label} type="guide" position="bottom" />
    </StyledCardHeader>
    <StyledCardBody orientation={orientation}>
      <Card.Title title={title} />
      {description != null &&
        <Content>
          {description}
        </Content>
      }
    </StyledCardBody>
  </StyledCard>

GuideCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.object,
  className: PropTypes.string,
  orientation: PropTypes.string.isRequired,
  description: PropTypes.string,
}

GuideCard.defaultProps = {
  orientation: 'landscape',
}

export default GuideCard
