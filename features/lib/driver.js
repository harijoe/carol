import 'chromedriver'
import { Builder } from 'selenium-webdriver'

const builder = new Builder().forBrowser('chrome')

const driver = builder.build()

export default driver
