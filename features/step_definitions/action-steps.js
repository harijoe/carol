import { defineSupportCode } from 'cucumber'
import { client } from 'nightwatch-cucumber'

defineSupportCode(({ When }) => {
  When(/I click on '(.*)'/, async target => {
    const xpath = `//*[not(self::style)][contains(text(), "${target}")][1]`
    await new Promise(resolve => setTimeout(resolve, 500)) // Necessary, waiting for element visible is not enough
    await client.click('xpath', xpath)
  })

  When(/I fill '(.*)' with '(.*)'/, async (target, value) => {
    await client.setValue('xpath', `//label[contains(text(), "${target}")]/..//input`, value)
  })

  When(/I select the option '(.*)' for field '(.*)'/, async (value, target) => {
    await client.click('xpath', `//label[contains(text(), "${target}")]/..//option[contains(text(), "${value}")]`)
  })

  When(/I wait until I see '(.*)'/, async expectedText => {
    await client.expect.element('body').text.to.contain(expectedText).before(2000)
  })
})
