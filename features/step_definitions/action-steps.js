import { defineSupportCode } from 'cucumber'

import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I click on '(.*)'/, async target => {
    // https://goo.gl/VHmvXp
    // Style tags are removed from the query because they create false positives (probably selenium bug)
    const element = await driver.findElement({ xpath: `//*[not(self::style)][contains(text(), "${target}")]` })

    await element.click()
  })
  When(/I fill '(.*)' with '(.*)'/, async (target, value) => {
    const label = await driver.findElement({ xpath: `//label[contains(text(), "${target}")]` })
    const forAttr = await label.getAttribute('for')
    const element = await driver.findElement({ css: `input[name=${forAttr}]` })

    await element.sendKeys(value)
  })
  When(/I select the option '(.*)' for field '(.*)'/, async (value, target) => {
    const label = await driver.findElement({ xpath: `//label[contains(text(), "${target}")]` })
    const forAttr = await label.getAttribute('for')
    const select = await driver.findElement({ css: `select[name=${forAttr}]` })
    await select.click()
    const option = await select.findElement({ xpath: `//option[contains(text(), "${value}")]` })
    option.click()
  })
  When(/I wait until I see '(.*)'/, async expectedText => {
    const check = async d => {
      const text = await d.findElement({ css: 'body' }).getText()

      return text.indexOf(expectedText) !== -1
    }

    await driver.wait(check)
  })
})
