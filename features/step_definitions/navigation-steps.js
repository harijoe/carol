import { defineSupportCode } from 'cucumber'
import getAppUrl from '../lib/app'
import paths from '../lib/paths'
import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I go to the '(home|auto-validation step 1|auto-validation step 2|chatbot|profile)' page/, async page => {
    await driver.get(getAppUrl(paths[page]))
  })
})
