import { defineSupportCode } from 'cucumber'
import expect from 'expect'

import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I should be on '(.*)'/, async (expectedTitle) => {
    const title = await driver.getTitle()

    expect(title).toEqual(expectedTitle)
  })

  When(/I should see '(.*)'/, async (expectedText) => {
    const text = await driver.findElement({ css: 'body' }).getText()

    expect(text).toInclude(expectedText)
  })

  When(/I should see (\d*) Key-one slides/, async (expectedCount) => {
    const keyOneSlides = await driver.findElements({ css: '.hero .slick-slide' })

    expect(keyOneSlides.length).toEqual(parseInt(expectedCount, 10))
  })
})