import 'chromedriver'
import { Builder } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

const builder = new Builder().forBrowser('chrome')

if (process.env.CHROME_HEADLESS) {
  const chromeOptions = new chrome.Options()

  chromeOptions.addArguments('headless', 'disable-gpu')
  builder.setChromeOptions(chromeOptions)
}

const driver = builder.build()

export default driver
