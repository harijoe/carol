import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import range from 'lodash/range'
import { theme } from 'utils/style'
import Icon from 'components/Icon'

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
  range(5).map(index =>
    <Star key={index} icon="star" value={starValue(value, index)} />
  )

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default StarRating
