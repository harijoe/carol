import isEqual from 'lodash/isEqual'

import search from './search'

const mocks = [
  {
    request: {
      query: 'a',
      page: 0,
      hitsPerPage: 4,
      filters: `countryCode:fr-FR`,
    },
    response: search,
  },
]

const match = params => {
  let result = null
  mocks.map(({request, response}) => {
    if (isEqual(params, request)) {
      result = response
    }

    return result
  })
}

const mockedIndex = {
  search: params => match(params),
}

export default mockedIndex
