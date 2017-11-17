import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled from 'styled-components'
import { theme } from 'utils/style'

import { Card, StarRating, ProfileImage } from 'components'

const ProName = styled(Card.Title)`
  font-size: ${theme('fonts.size.l')};
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`

const RatingWrapper = styled.p`
  color: ${theme('colors.grayscale.dark')};
  margin: 0;
`

const ProLogo = styled(ProfileImage)`
  margin-bottom: ${theme('spaces.m')};
  margin-top: -8rem;
`

const ProCardRating = ({ name, image, logoUrl, globalRating, globalRatingCount, globalCommentsCount, translate }) =>
  <Card padding="large" hoverState={false}>
    <Card.Header height="xsmall">
      <Card.Image image={image} />
    </Card.Header>
    <Card.Body>
      <ProLogo image={logoUrl} size="l" />
      <ProName title={name} />
      <RatingWrapper>
        <StarRating value={globalRating} />
        <strong>{globalRating}</strong>
        <br />
        {globalRatingCount} {translate('firm.details.rating_reviews')}
        <strong>
          {globalCommentsCount !== 0 &&
          globalCommentsCount !== globalRatingCount && (
            <span> {translate('firm.details.rating_comments', { count: globalCommentsCount })}</span>
          )}
        </strong>
      </RatingWrapper>
    </Card.Body>
  </Card>

ProCardRating.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  logoUrl: PropTypes.string.isRequired,
  globalRating: PropTypes.number.isRequired,
  globalRatingCount: PropTypes.number.isRequired,
  globalCommentsCount: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(ProCardRating)
