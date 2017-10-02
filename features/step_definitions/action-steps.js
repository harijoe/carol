import { defineSupportCode } from 'cucumber'
import client from '../lib/promisified-nightwatch-client'

defineSupportCode(({ When }) => {
  When(/I click on '(.*)'/, async target => {
    await new Promise(resolve => setTimeout(resolve, 500)) // Necessary, waiting for element visible is not enough
    const xpath = `//*[not(self::style) and contains(text(), "${target}")]`
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

  When(/I verify the field '(.*)'/, async fieldName => {
    const findVerifyButton = label => {
      const allFieldWrappers = Array.from(document.querySelectorAll('.verified-field-wrapper'))
      const fieldWrapper = allFieldWrappers.find(field => field.querySelector('label').innerText === label)
      return fieldWrapper.querySelector('button')
    }
    const verifyButton = await client.execute(findVerifyButton, [fieldName])
    await client.elementIdClick(verifyButton.ELEMENT)
  })
})
