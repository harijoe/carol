import { defineSupportCode } from 'cucumber'
import { locales, port } from '../../src/config'

import driver from '../lib/driver'
import environment from '../lib/environment'

defineSupportCode(({ When }) => {
  When(/I go to the home page/, async () => {
    const link = `${locales[environment.locale].url}:${port}`

    await driver.get(link)
  })
})
