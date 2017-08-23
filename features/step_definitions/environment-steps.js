import { defineSupportCode } from 'cucumber'
import { client } from 'nightwatch-cucumber'

import environment from '../lib/environment'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Given }) => {
  Given(/I am an english user/, () => (environment.locale = 'en-GB'))

  Given(/I have feature flag '(.*)'/, async flag => {
    await goToCookiesPage()
    await client.setCookie({
      name: 'features',
      value: flag,
      path: '/',
    })
  })

  Given(/I am logged in/, async () => {
    await goToCookiesPage()
    await client.setCookie({
      name: 'refresh_token',
      value: 'REFRESH_TOKEN_VALUE',
      path: '/',
    })
    await client.setCookie({
      name: 'access_token',
      value: 'REFRESH_TOKEN_VALUE',
      path: '/',
    })
    await client.setCookie({
      name: 'grant_type',
      value: 'password',
      path: '/',
    })
  })
})
