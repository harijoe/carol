import { defineSupportCode } from 'cucumber'
import { client } from 'nightwatch-cucumber'

defineSupportCode(({ Before }) => {
  Before(async () => client.resizeWindow(1400, 1000))
})
