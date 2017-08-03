import { defineSupportCode } from 'cucumber'
import { locales } from '../../src/config'

import driver from '../lib/driver'
import environment from '../lib/environment'

defineSupportCode(({ When }) => {
  When(/I go to the (home|auto-validation step 1) page/, async (page) => {
    const navigateTo = path => driver.get(`${locales[environment.locale].url}${path}`)
    const paths = {
      home: '/',
      'auto-validation step 1': '/projects/b2c515b9-d4fa-4cfd-b4e3-bb3cc9fd9f44/account',
    }

    await navigateTo(paths[page])
  })
})
