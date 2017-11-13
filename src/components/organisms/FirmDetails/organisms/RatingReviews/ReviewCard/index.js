import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedDate } from 'react-intl'
import { theme, breakpointMax, breakpoint } from 'utils/style'
import cloudinary from 'utils/cloudinary'
import anonymise from 'utils/anonymizeUserName'

import { Card, StarRating, ProfileImage } from 'components'

const StyledCard = styled(Card)`
  min-height: unset;
  margin: ${theme('spaces.s')} 0;

  &:first-child {
    margin-top: 0;    
  }
`

const ReviewBody = styled(Card.Body)`
  &, &.qs-Card-body {
    padding-top: 0;
  }

  blockquote {
    margin: 0;
  }
`
const StyledProfileImage = styled(ProfileImage)`
  background-size: ${theme('icons.size.s')};
`

const UserWrapper = styled(Card.Header)`
  display: flex;

  aside {
    display: flex;
    flex: 2;
    padding-left: ${theme('spaces.l')};

    ${breakpointMax('m')`
      flex-wrap: wrap;
      padding-left: ${theme('spaces.m')};
    `}
  }
  
  p {
    margin: 0;

    ${breakpointMax('m')`
      width: 100%;
    `}

    ${breakpoint('m')`
      flex: 1;
    `}
  }

  time {
    display: block;
  }
`

const RatingWrapper = styled.div`
  color: ${theme('colors.grayscale.dark')};
  margin: 0;

  ${breakpointMax('m')`
    margin-top: ${theme('spaces.s')};
  `}
`

const StyledTime = styled.time`
  &::first-letter{
    text-transform: uppercase;
  }
`

const ReviewCard = ({ userName, reviewDate, reviewText, globalRating, ...props }) =>
  <StyledCard padding="fluid" hoverState={false} {...props}>
    <UserWrapper height="auto">
      <StyledProfileImage size="s" image={cloudinary('/icons/default_avatar.svg')} />
      <aside>
        <p>
          <strong>{anonymise(userName)}</strong>
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
      </aside>
    </UserWrapper>
    <ReviewBody>
      <blockquote>
        {reviewText}
      </blockquote>
    </ReviewBody>
  </StyledCard>

ReviewCard.propTypes = {
  userName: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  globalRating: PropTypes.number.isRequired,
  reviewText: PropTypes.string,
}

export default ReviewCard
