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
  When(/I select the option '(.*)' for field '(.*)'/, async (value, target) => {
    const label = await driver.findElement({ xpath: `//label[contains(text(), "${target}")]`})
    const forAttr = await label.getAttribute('for')
    const select = await driver.findElement({ css: `select[name=${forAttr}]` })
    await select.click()
    const option = await select.findElement({ xpath: `//option[contains(text(), "${value}")]`})
    option.click()
  })
})
