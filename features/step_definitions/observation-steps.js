import { defineSupportCode } from 'cucumber'
import expect from 'expect'

import getApiUrl from '../lib/app'
import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I should be on a page titled '(.*)'/, async expectedTitle => {
    const title = await driver.getTitle()

    expect(title).toEqual(expectedTitle)
  })

  When(/I should be on '(.*)'/, async expectedText => {
    const text = await driver.getCurrentUrl()

    expect(text).toEqual(expectedText)
  })

  When(/I should be redirected to '(.*)'/, async target => {
    const targetUrl = getApiUrl(target)

    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl()

      return targetUrl === currentUrl
    })
  })

  When(/I should see '(.*)'(?: (\d) times)?$/, async (expectedText, expectedOccurences) => {
    const text = await driver.findElement({ css: 'body' }).getText()

    if (!expectedOccurences) {
      return expect(text).toInclude(expectedText)
    }

    const occurences = text.split(expectedText).length - 1

    return expect(occurences).toEqual(expectedOccurences)
  })

  When(/I should see a popin/, async () => {
    const element = await driver.findElement({ css: '.popin.visible' })

    expect(element).toNotEqual(null)
  })

  When(/I should see after a while '(.*)'/, async expectedText => {
    const check = async d => {
      const text = await d.findElement({ css: 'body' }).getText()

      return text.indexOf(expectedText) !== -1
    }

    await driver.wait(check)

    const body = await driver.findElement({ css: 'body' }).getText()

    expect(body).toInclude(expectedText)
  })

  When(/I should not see '(.*)'/, async expectedText => {
    const text = await driver.findElement({ css: 'body' }).getText()

    expect(text).toNotInclude(expectedText)
  })

  When(/I should see (\d*) Key-one slides/, async expectedCount => {
    const keyOneSlides = await driver.findElements({ css: '.hero .slick-slide' })

    expect(keyOneSlides.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should see (\d*) quick replies/, async expectedCount => {
    const possibleAnswers = await driver.findElements({ css: '.conversation .quick-reply' })

    expect(possibleAnswers.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should see the search input field/, async () => {
    const searchField = await driver.findElement({ css: 'input[placeholder="What is your project?"]' })

    expect(searchField).toNotEqual(null)
  })

  When(/I should see the back button/, async () => {
    const element = await driver.findElement({ css: '.back-button' })

    expect(element).toNotEqual(null)
  })

  When(/I should see (\d*) items in the footer advices section/, async expectedCount => {
    const footerAdvicesItems = await driver.findElements({ css: '.footer .advices li' })

    expect(footerAdvicesItems.length).toEqual(parseInt(expectedCount, 10))
  })

  When(/I should have emitted an analytics tag named '(.*)'/, async expectedEvent => {
    const dataLayer = await driver.executeScript(() => window.dataLayer)
    const { event } = [...dataLayer].pop()

    expect(event).toEqual(expectedEvent)
  })

  When(/I should have emitted (\d*) analytics tags named '(.*)'/, async (nbOfEvents, rawEvents) => {
    const expectedEvents = rawEvents.split(', ')
    expect(expectedEvents.length).toEqual(nbOfEvents)

    const dataLayer = await driver.executeScript(() => window.dataLayer)
    const dataLayerCopy = [...dataLayer]
    const events = dataLayerCopy.slice(-1 * nbOfEvents)
    events.map(({ event }, index) => expect(event).toEqual(expectedEvents[index]))
  })

  When(/I should see option '(.*)' populated with '(.*)'/, async (target, value) => {
    const label = await driver.findElement({ xpath: `//label[contains(text(), "${target}")]` })
    const forAttr = await label.getAttribute('for')

    const selectedValue = await driver.executeScript(forParam => {
      const select = document.querySelector(`select[name=${forParam}]`)
      return select.options[select.selectedIndex].text
    }, forAttr)

    expect(selectedValue).toEqual(value)
  })


  When(/I should see a notification with title '(.*)'/, async expectedText => {
    const check = async d => {
      const elements = await d.findElements({ css: '.notifications h4' })

      if (elements.length === 0 || !elements[0]) {
        return false
      }

      const text = await elements[0].getText()

      return text.indexOf(expectedText) !== -1
    }

    await driver.wait(check)

    const body = await driver.findElement({ css: '.notifications h4' }).getText()

    expect(body).toInclude(expectedText)
  })
})
