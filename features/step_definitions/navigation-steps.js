import { defineSupportCode } from 'cucumber'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'
import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I go to the '(home|auto-validation step 1|chatbot)' page/, async page => {
    const navigateTo = path => driver.get(getAppUrl(path))

    await navigateTo(paths[page])
  })
})
