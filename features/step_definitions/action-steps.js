import { defineSupportCode } from 'cucumber'

import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I click on '(.*)'/, async target => {
    // https://goo.gl/VHmvXp
    const element = await driver.findElement({ xpath: `//*[contains(text(), "${target}")]` })

    await element.click()
  })
  When(/I fill '(.*)' with '(.*)'/, async (target, value) => {
    const element = await driver.findElement({ css: `input[name=${target}]` })

    await element.sendKeys(value)
  })
})
