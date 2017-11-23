import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpoint, breakpointMax } from 'utils/style'

import { Card, Heading, StarRating } from 'components'

const StyledCard = styled(Card)`
  width: 100%;

  ${breakpoint('m')`
    align-self: center;
    max-width: 37.5rem;
  `}

  ${breakpoint('l')`
    margin-right: ${theme('spaces.xxxl')};
  `}

  strong {
    margin-left: ${theme('spaces.m')};
    font-size: ${theme('fonts.size.xxl')};
  }

  .qs-Card-header {
    ${breakpointMax('m')`
      height: 18rem;
    `} 
  }
`

const ProName = styled(Heading)`
  margin-bottom: ${theme('spaces.s')};
  
  ${breakpoint('m')`
    font-size: ${theme('fonts.size.xl')};
  `}
`

const TradeName = styled.p`
  margin-top: 0;
  font-size: ${theme('fonts.size.s')};

  ${breakpoint('m')`
    font-size: ${theme('fonts.size.base')};
  `}
`

const StoryCard = ({ translate, name, trade, globalRating, globalRatingCount, image }) =>
  <StyledCard>
    <Card.Header height="large">
      <Card.Image image={image} />
    </Card.Header>
    <Card.Body>
      <ProName level={3}>{name}</ProName>
      <TradeName>{trade}</TradeName>
      <StarRating value={2.5} />
      <strong>{globalRating}</strong> - {globalRatingCount} {translate('firm.details.rating_reviews')}
    </Card.Body>
  </StyledCard>

StoryCard.propTypes = {
  translate: PropTypes.func,
  globalRating: PropTypes.string,
  globalRatingCount: PropTypes.string,
  trade: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.object,
}

export default injectTranslate(StoryCard)
