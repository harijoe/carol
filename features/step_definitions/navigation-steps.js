import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'

defineSupportCode(({ When }) => {
  When(
    /I go to the '(home|auto-validation step 1|auto-validation step 2|auto-validation step 3|chatbot|search-result|profile|email validation|my projects|chatbot via partner link|validated project|found project)' page(?: with query '(.*)')?$/,
    async (page, query) => {
      const formattedQuery = query || ''

      await client.url(getAppUrl(paths[page]) + formattedQuery)
    },
  )
})
