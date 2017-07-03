import { defineSupportCode } from 'cucumber'

import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I go to the home page/, async () => {
    await driver.get('http://carol-fr-dev.qarx.io:4321')
  })
})
