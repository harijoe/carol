import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'

defineSupportCode(({ Before }) => {
  Before(async () => client.resizeWindow(1400, 1000))
})
