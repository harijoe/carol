import { defineSupportCode } from 'cucumber'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'
import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(
    /I go to the '(home|auto-validation step 1|auto-validation step 2|auto-validation step 3|chatbot|search-result|profile|email validation)' page(?: with query '(.*)')?$/,
    async (page, query) => {
      const formattedQuery = query || ''
      await driver.get(getAppUrl(paths[page]) + formattedQuery)
    },
  )
})
