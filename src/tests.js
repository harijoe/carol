import 'babel-polyfill'
import jsdom from 'jsdom-global'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

jsdom('<html><head></head><body></body></html>', { url: 'http://quotatis_dev.co.uk' })

describe('containers', () => {
  require('./containers/tests')
})
describe('hoc', () => {
  require('./hoc/tests')
})
describe('pages', () => {
  require('./pages/tests')
})
describe('services', () => {
  require('./services/tests')
})
describe('ui', () => {
  require('./ui/tests')
})
describe('utils', () => {
  require('./utils/tests')
})
