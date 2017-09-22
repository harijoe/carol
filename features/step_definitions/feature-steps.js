import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Given }) => {

  Given(/I have feature flag '(.*)'/, async flag => {
    await goToCookiesPage()
    await client.setCookie({ name: 'features', value: flag, path: '/' })
  })

})
