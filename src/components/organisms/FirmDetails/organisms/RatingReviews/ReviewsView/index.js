import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint, breakpointMax } from 'utils/style'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { Section, Grid, Row, Col, Button, ReactArray } from 'components'

import ProCardRating from '../ProCardRating'
import ReviewCard from '../ReviewCard'
import { SORT_KEYS } from '../reviewSorting'

const StyledRow = styled(Row)`
  align-items: flex-start;

  ${breakpointMax('m')`
    margin: calc(${theme('spaces.m')} / -2);
  `}
`

const RatingGrid = styled(Grid)`
  ${breakpoint('l')`
    max-width: 95rem;
  `};
`

const LeftCol = styled(Col)`
  ${breakpointMax('m')`
    display: none;
  `}
`

const SortByCol = styled(Col)`
  margin-bottom: ${theme('spaces.m')};
  text-align: right;
  ${breakpointMax('m')`
    margin: ${theme('spaces.m')} 0;
    order: 1;
  `}
`

const RightCol = styled(Col)`
  display: flex;
  flex-direction: column;

  ${breakpointMax('m')`
    order: 2;
  `};
`

const StyledSelect = styled.select`
  margin-left: 1ch;
`

const ReviewsView = ({ translate, labelWithColon, sortKey, maxReviews, onChangeBy, onSeeMore, coverProImage, firmDetails, reviews }) =>
  <div>
    <a name="reviews" id="reviews" />
    <Section title={translate('firm.reviews.section_title')} light>
      <RatingGrid narrow>
        <StyledRow>
          <SortByCol xs={12}>
            {labelWithColon(translate('firm.reviews.sort_by'))}
            <StyledSelect
              value={sortKey}
              onChange={event => onChangeBy(event.target.value)}
            >
              {Object.values(SORT_KEYS).map(({ name }) =>
                <option
                  key={name}
                  value={name}
                >
                  {translate(`firm.reviews.${name}`)}
                </option>
              )}
            </StyledSelect>
          </SortByCol>
          <LeftCol xs={12} m={4}>
            <ProCardRating image={{ src: coverProImage }} {...firmDetails} />
          </LeftCol>
          <RightCol xs={12} m={8}>
            <ReactArray>
              {reviews.slice(0, maxReviews).map(review =>
                <ReviewCard key={review['@id']} {...review} />,
              )}
              {reviews.length > maxReviews && (
                <Button state="third" outline maxWidth onClick={onSeeMore}>
                  {translate('firm.reviews.see_more')}
                </Button>
              )}
            </ReactArray>
          </RightCol>
        </StyledRow>
      </RatingGrid>
    </Section>
  </div>


ReviewsView.propTypes = {
  translate: PropTypes.func.isRequired,
  labelWithColon: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  maxReviews: PropTypes.number.isRequired,
  onChangeBy: PropTypes.func.isRequired,
  onSeeMore: PropTypes.func.isRequired,
  coverProImage: PropTypes.string,
  firmDetails: PropTypes.object.isRequired,
  reviews: PropTypes.array,
}

export default injectTranslate(ReviewsView)
