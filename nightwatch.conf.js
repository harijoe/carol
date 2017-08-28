const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')()

module.exports = {
  output_folder: 'features/reports',
  screenshots: {
    enabled: true,
    on_failure: true,
    path: 'features/screenshots',
  },
  test_workers: {
    enabled: false,
    workers: 'auto',
  },
  test_settings: {
    default: {
      selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path,
        },
      },
      globals: {
        retryAssertionTimeout: 10000,
        waitForConditionTimeout: 10000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    travis: {
      selenium: {
        start_process: false,
      },
    },
    docker: {
      globals: {
        selenium_host: '192.168.99.100',
      },
      selenium: {
        start_process: false,
      },
    },
  },
}
