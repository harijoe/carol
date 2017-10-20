import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'utils/style'
import { Icon } from 'components'

const Star = styled(Icon)`
  margin-right: ${theme('spaces.xs')};

  .empty_star {
    clip-path: inset(0 0 0 ${({ value }) => (value * 100)}%);
  }
`

export const starValue = (value, floor) => {
  if (value < floor) return 0
  if (value > floor + 1) return 1
  return value - floor
}

const StarRating = ({ value }) =>
  <span>
    <Star icon="star" value={starValue(value, 0)} />
    <Star icon="star" value={starValue(value, 1)} />
    <Star icon="star" value={starValue(value, 2)} />
    <Star icon="star" value={starValue(value, 3)} />
    <Star icon="star" value={starValue(value, 4)} />
  </span>

StarRating.propTypes = {
  value: PropTypes.number,
}

export default StarRating
