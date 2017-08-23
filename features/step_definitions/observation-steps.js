import { defineSupportCode } from 'cucumber'
import expect from 'expect'
import { client } from 'nightwatch-cucumber'

import getApiUrl from '../lib/app'
import promisify from '../lib/promisify'
import { assertTextContainedInOrder } from '../lib/text-utils'

defineSupportCode(({ When }) => {
  When(/I should be on a page titled '(.*)'/, async expectedTitle => {
    await client.assert.title(expectedTitle)
  })

  When(/I should be redirected to '(.*)'/, async target => {
    const targetUrl = getApiUrl(target)

    await client.assert.urlEquals(targetUrl)
  })

  When(/I should see:$/, async expectedText => {
    const bodyText = await promisify(client.getText)('body')

    assertTextContainedInOrder(bodyText, expectedText.raw())
  })

  When(/I should see '(.*)'$/, async (expectedText) => {
    await client.assert.containsText('body', expectedText)
  })

  When(/I should see a popin/, async () => {
    await client.assert.visible('.popin.visible')
  })

  When(/I should see after a while '(.*)'/, async expectedText => {
    await client.expect.element('body').text.to.contain(expectedText).before(2000)
  })

  When(/I should not see '(.*)'/, async notExpectedText => {
    await client.expect.element('body').text.to.not.contain(notExpectedText)
  })

  When(/I should see (\d*) Key-one slides/, async expectedCount => {
    const keyOneSlides = await promisify(client.elements)('css selector', '.hero .slick-slide')

    expect(keyOneSlides.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should see (\d*) quick replies/, async expectedCount => {
    const possibleAnswers = await promisify(client.elements)('css selector', '.conversation .quick-reply')

    expect(possibleAnswers.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should see the search input field/, async () => {
    await client.assert.visible('input[placeholder="What is your project?"]')
  })

  When(/I should see the back button/, async () => {
    await client.assert.visible('.back-button')
  })

  When(/I should see (\d*) items in the footer advices section/, async expectedCount => {
    const footerAdvicesItems = await promisify(client.elements)('css selector', '.footer .advices li')

    expect(footerAdvicesItems.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should have emitted an analytics tag named '(.*)'/, async expectedEvent => {
    const dataLayer = await promisify(client.execute)(() => window.dataLayer)
    const { event } = [...dataLayer].pop()

    expect(event).toEqual(expectedEvent)
  })

  When(/I should have emitted (\d*) analytics tags named '(.*)'/, async (nbOfEvents, rawEvents) => {
    const expectedEvents = rawEvents.split(', ')
    expect(expectedEvents.length).toEqual(nbOfEvents)

    const dataLayer = await promisify(client.execute)(() => window.dataLayer)
    const dataLayerCopy = [...dataLayer]
    const events = dataLayerCopy.slice(-1 * nbOfEvents)
    events.map(({ event }, index) => expect(event).toEqual(expectedEvents[index]))
  })

  When(/I should see option '(.*)' populated with '(.*)'/, async (target, value) => {
    const label = await promisify(client.element)('xpath', `//label[contains(text(), "${target}")]`)
    const forAttr = await promisify(client.elementIdAttribute)(label.ELEMENT, 'for')

    const selectedValue = await promisify(client.execute)(forParam => {
      const select = document.querySelector(`select[name=${forParam}]`)
      return select.options[select.selectedIndex].text
    }, [forAttr])

    expect(selectedValue).toEqual(value)
  })

  When(/I should see a notification with title '(.*)'/, async expectedText => {
    await client.expect.element('.notifications h4').text.to.contain(expectedText).before(2000)
  })

})
