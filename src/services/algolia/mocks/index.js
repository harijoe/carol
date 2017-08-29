import isEqual from 'lodash/isEqual'
import get from 'lodash/get'

import search from './search'

const mocks = [
  {
    request: {
      query: 'a',
      page: 0,
      hitsPerPage: 1000,
      filters: `countryCode:FR`,
    },
    response: search,
  },
]

const match = params => get(mocks.find(({ request }) => isEqual(params, request)), 'response') || null

const mockedIndex = {
  search: params => match(params),
}

export default mockedIndex
