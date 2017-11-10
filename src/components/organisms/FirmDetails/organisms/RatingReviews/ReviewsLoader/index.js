import React from 'react'
import PropTypes from 'prop-types'
import api from 'services/api'

class ReviewsLoader extends React.Component {
  static propTypes = {
    reviewsLight: PropTypes.arrayOf(PropTypes.shape({
      ['@id']: PropTypes.string.isRequired,
    })),
    children: PropTypes.func.isRequired,
  }

  state = {}

  async componentWillMount() {
    const reviews = await Promise.all(this.props.reviewsLight.map(({ ['@id']: id }) => api.get(id)))
    reviews.sort((a, b) => a.reviewDate < b.reviewDate ? 1 : -1)
    this.setState({ reviews })
  }

  render() {
    const { reviews } = this.state
    if (!reviews) return null

    const { children } = this.props
    return children(reviews)
  }
}

export default ReviewsLoader
