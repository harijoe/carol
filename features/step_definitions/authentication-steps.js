import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Given }) => {

  Given(/I am logged in/, async () => {
    await goToCookiesPage()
    await client.setCookie({ name: 'refresh_token', value: 'REFRESH_TOKEN_VALUE', path: '/' })
    await client.setCookie({ name: 'access_token', value: 'REFRESH_TOKEN_VALUE', path: '/' })
    await client.setCookie({ name: 'grant_type', value: 'password', path: '/' })
  })

})
