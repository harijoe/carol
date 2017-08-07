import { defineSupportCode } from 'cucumber'
import driver from '../lib/driver'

defineSupportCode(({ registerHandler }) => {
  registerHandler('FeaturesResult', async ({ success }) => {
    if (success || !process.env.DEBUG) {
      await driver.quit()
    }
  })
})
