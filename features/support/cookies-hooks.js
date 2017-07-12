import { defineSupportCode } from 'cucumber'
import driver from '../lib/driver'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Before }) => {
  Before(async () => {
    await goToCookiesPage()
    await driver.manage().deleteAllCookies()
  })
})

