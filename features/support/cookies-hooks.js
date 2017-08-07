import { defineSupportCode } from 'cucumber'
import driver from '../lib/driver'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Before }) => {
  Before(async () => {
    await goToCookiesPage()
    await driver.manage().deleteAllCookies()
    await driver.manage().addCookie({ name: 'access_token', value: 'ACCESS_TOKEN_VALUE' })
    await driver.manage().addCookie({ name: 'cookies_banner_hidden', value: 'true' })
  })
})
