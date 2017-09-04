import { defineSupportCode } from 'cucumber'
import { client } from 'nightwatch-cucumber'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'

defineSupportCode(({ When }) => {
  When(
    /I go to the '(home|auto-validation step 1|auto-validation step 2|auto-validation step 3|chatbot|search-result|profile|email validation|my projects)' page(?: with query '(.*)')?$/,
    async (page, query) => {
      const formattedQuery = query || ''

      await client.url(getAppUrl(paths[page]) + formattedQuery)
    },
  )
})
