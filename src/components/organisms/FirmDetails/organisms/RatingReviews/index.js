import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { Section, Grid, Row, Col, Button } from 'components'
import ProCardRating from './ProCardRating'
import ReviewCard from './ReviewCard'
import ReviewsLoader from './ReviewsLoader'

const StyledRow = styled(Row)`
  align-items: flex-start;
`

const RatingGrid = styled(Grid)`
  ${breakpoint('l')`
    max-width: 95rem;
  `};
`

const LeftCol = styled(Col)`
  ${breakpointMax('m')`
    order: 1;
  `}
`

const SortByCol = styled(Col)`
  margin-bottom: ${theme('spaces.m')};
  text-align: right;
  ${breakpointMax('m')`
    margin: ${theme('spaces.m')} 0;
    order: 2;
  `}
`

const RightCol = styled(Col)`
  display: flex;
  flex-direction: column;

  ${breakpointMax('m')`
    order: 3;
  `};
`


const RatingReviews = ({ translate, labelWithColon, coverProImage, firmDetails }) =>
  <Section title={translate('firm.reviews.section_title')} light>
    <RatingGrid narrow>
      <StyledRow>
        <SortByCol xs={12}>
          {labelWithColon(translate('firm.reviews.sort_by'))}
          &nbsp;
          <select>
            <option>{translate('firm.reviews.most_recent')}</option>
            <option>{translate('firm.reviews.best_rating')}</option>
            <option>{translate('firm.reviews.worst_rating')}</option>
          </select>
        </SortByCol>
        <LeftCol xs={12} m={4}>
          <ProCardRating image={{ src: coverProImage }} {...firmDetails} />
        </LeftCol>
        <RightCol xs={12} m={8}>
          <ReviewsLoader reviewsLight={firmDetails.reviews}>
            {reviews => reviews.map(review =>
              <ReviewCard key={review['@id']} {...review} />
            )}
          </ReviewsLoader>
          <Button state="third" outline maxWidth>
            {translate('firm.reviews.see_more')}
          </Button>
        </RightCol>
      </StyledRow>
    </RatingGrid>
  </Section>

RatingReviews.propTypes = {
  translate: PropTypes.func,
  labelWithColon: PropTypes.func,
  coverProImage: PropTypes.string,
  firmDetails: PropTypes.object.isRequired,
}

export default injectTranslate(RatingReviews)
