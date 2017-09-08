import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Before }) => {
  Before(async () => {
    await goToCookiesPage()
    await client.deleteCookies()
    await client.setCookie({ name: 'access_token', value: 'ACCESS_TOKEN_VALUE' })
    await client.setCookie({ name: 'cookies_banner_hidden', value: 'true' })
  })
})
