import { defineSupportCode } from 'cucumber'
import { locales, port } from '../../src/config'

import driver from '../lib/driver'
import environment from '../lib/environment'

defineSupportCode(({ When }) => {
  When(/I go to the home page/, async () => {
    let link

    switch (environment.language) {
      case 'en':
        link = `${locales.en_GB.url}:${port}`
        break
      case 'fr':
      default:
        link = `${locales.fr_FR.url}:${port}`
    }

    await driver.get(link)
  })
})
