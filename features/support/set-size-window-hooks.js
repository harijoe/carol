import { defineSupportCode } from 'cucumber'
import driver from '../lib/driver'

defineSupportCode(({ Before }) => {
  Before(async () => driver.manage().window().setSize(1400,1000))
})
