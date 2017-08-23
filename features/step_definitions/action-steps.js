import { defineSupportCode } from 'cucumber'
import { client } from 'nightwatch-cucumber'

defineSupportCode(({ When }) => {
  When(/I click on '(.*)'/, async target => {
    // https://goo.gl/VHmvXp
    // Style tags are removed from the query because they create false positives (probably selenium bug)
    await client.click('xpath', `//*[not(self::style)][contains(text(), "${target}")]`)
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
