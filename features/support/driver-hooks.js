import { defineSupportCode } from 'cucumber'
import driver from '../lib/driver'

defineSupportCode(({ registerHandler }) => {
  registerHandler('AfterFeatures', async () => {
    await driver.quit()
  })
})

