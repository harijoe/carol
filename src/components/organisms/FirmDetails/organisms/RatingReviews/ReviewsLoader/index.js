import React from 'react'
import PropTypes from 'prop-types'
import api from 'services/api'
import { sort, SORT_KEYS } from '../reviewSorting'

class ReviewsLoader extends React.Component {
  static propTypes = {
    reviewsLight: PropTypes.arrayOf(PropTypes.shape({
      ['@id']: PropTypes.string.isRequired,
    })),
    sortKey: PropTypes.oneOf(Object.keys(SORT_KEYS)),
    children: PropTypes.func.isRequired,
  }

  state = {}

  async componentWillMount() {
    const { reviewsLight } = this.props
    const reviews = await Promise.all(reviewsLight.map(({ ['@id']: id }) => api.get(id)))
    this.setState({ reviews })
  }

  render() {
    const { reviews } = this.state
    if (!reviews) return null

    const { sortKey, children } = this.props
    return children(sort(reviews, sortKey))
  }
}

export default ReviewsLoader
