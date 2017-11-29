import orderBy from 'lodash/orderBy'

export const SORT_KEYS = {
  most_recent: {
    name: 'most_recent',
    prop: 'reviewDate',
    order: 'desc',
  },
  best_rating: {
    name: 'best_rating',
    prop: 'globalRating',
    order: 'desc',
  },
  worst_rating: {
    name: 'worst_rating',
    prop: 'globalRating',
    order: 'asc',
  },
}

export const sort = (reviews, by) => orderBy(reviews, SORT_KEYS[by].prop, [SORT_KEYS[by].order])
