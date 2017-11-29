import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fromFirm, fromStatus } from 'store/selectors'
import { firmReviews, FIRM_REVIEWS } from 'store/actions'
import { sort, SORT_KEYS } from './reviewSorting'
import ReviewsView from './ReviewsView'

class RatingReviews extends React.Component {
  static propTypes = {
    requestFirmReviews: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    reviews: PropTypes.array,
  }

  state = {
    sortKey: SORT_KEYS.most_recent.name,
    maxReviews: 3,
  }

  componentDidMount() {
    this.props.requestFirmReviews()
  }

  onChangeBy = sortKey => {
    this.setState({ sortKey })
  }

  onSeeMore = () => {
    this.setState({ maxReviews: this.state.maxReviews + 3 })
  }

  render() {
    const { loading, reviews, ...props } = this.props
    if (loading || !reviews || reviews.length === 0) {
      return null
    }

    const { sortKey } = this.state
    return (
      <ReviewsView
        reviews={sort(reviews, sortKey)}
        {...props}
        {...this.state}
        onChangeBy={this.onChangeBy}
        onSeeMore={this.onSeeMore}
      />
    )
  }
}

export default (
  connect(
    (state, { firmDetails: { '@id': id } }) => ({
      details: fromFirm.getDetails(state, id),
      loading: fromStatus.isLoading(state, FIRM_REVIEWS.prefix),
      reviews: fromFirm.getReviews(state, id),
    }),
    (dispatch, { firmDetails: { '@id': id } }) => ({
      requestFirmReviews: () => dispatch(firmReviews.request(id)),
    }),
  )
)(RatingReviews)
