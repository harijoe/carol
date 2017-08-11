import { defineSupportCode } from 'cucumber'

import environment from '../lib/environment'
import driver from '../lib/driver'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Given }) => {
  Given(/I am an english user/, () => (environment.locale = 'en-GB'))
  Given(/I have feature flag '(.*)'/, async flag => {
    await goToCookiesPage()
    await driver.manage().addCookie({
      name: 'features',
      value: flag,
      path: '/',
    })
  })

  Given(/I am logged in/, async () => {
    await goToCookiesPage()
    await driver.manage().addCookie({
      name: 'refresh_token',
      value: 'REFRESH_TOKEN_VALUE',
      path: '/',
    })
    await driver.manage().addCookie({
      name: 'access_token',
      value: 'REFRESH_TOKEN_VALUE',
      path: '/',
    })
    await driver.manage().addCookie({
      name: 'grant_type',
      value: 'password',
      path: '/',
    })
  })
})
