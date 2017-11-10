import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedDate } from 'react-intl'
import { theme, breakpoint } from 'utils/style'

import { Card, StarRating, ProfileImage } from 'components'

const StyledCard = styled(Card)`
  min-height: unset;
  margin: ${theme('spaces.s')} 0;
  &:first-child {
    margin-top: 0;    
  }
`

const ReviewBody = styled(Card.Body)`
  display: flex;
`

const LeftCol = styled.div`
  margin: 0;
`

const RightCol = styled.div`
  flex: 1;
  margin: 0;
  padding-left: ${theme('spaces.m')};

  ${breakpoint('m')`
    padding-left: ${theme('spaces.l')};
  `}

  blockquote {
    margin: 0;
  }
`

const UserWrapper = styled.header`
  display: flex;
  margin-bottom: ${theme('spaces.m')};
  
  > p {
    flex: 1;
    margin: 0;
  }

  time {
    display: block;
  }
`

const RatingWrapper = styled.div`
  color: ${theme('colors.grayscale.dark')};
  margin: 0;
`

const StyledTime = styled.time`
  &::first-letter{
    text-transform: uppercase;
  }
`

const ReviewCard = ({ userName, reviewDate, reviewText, globalRating, ...props }) =>
  <StyledCard padding="fluid" hoverState={false} {...props}>
    <ReviewBody>
      <LeftCol>
        <ProfileImage size="s" />
      </LeftCol>
      <RightCol>
        <UserWrapper>
          <p>
            <strong>{userName}</strong>
            <StyledTime dateTime={reviewDate}>
              <FormattedDate
                value={Date.parse(reviewDate)}
                month="long"
                year="numeric"
              />
            </StyledTime>
          </p>
          <RatingWrapper>
            <StarRating value={globalRating} />
            <strong> {globalRating}</strong>
          </RatingWrapper>
        </UserWrapper>
        <blockquote>
          {reviewText}
        </blockquote>
      </RightCol>
    </ReviewBody>
  </StyledCard>

ReviewCard.propTypes = {
  userName: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  globalRating: PropTypes.number.isRequired,
  reviewText: PropTypes.string,
}

export default ReviewCard
