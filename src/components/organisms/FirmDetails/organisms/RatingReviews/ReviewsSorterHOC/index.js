import React from 'react'
import { SORT_KEYS } from '../reviewSorting'

const ReviewsSorter = Component => class extends React.Component {
  state = {
    sortKey: SORT_KEYS.most_recent.name,
    maxReviews: 3,
  }
  onChangeBy = sortKey => {
    this.setState({ sortKey })
  }
  onSeeMore = () => {
    this.setState({ maxReviews: this.state.maxReviews + 3 })
  }
  render() {
    return (
      <Component
        {...this.props}
        {...this.state}
        onChangeBy={this.onChangeBy}
        onSeeMore={this.onSeeMore}
      />
    )
  }
}

export default ReviewsSorter
