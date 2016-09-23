describe('actions', () => {
  describe('user', () => {
    require('./actions/user/login.test')
  })
  describe('pro', () => {
    require('./actions/pro/searchPro.test')
  })
  describe('content', () => {
    require('./actions/content.test')
  })
  describe('content', () => {
    require('./actions/content.test')
  })
})
describe('containers', () => {
  require('./containers/home.test')
  describe('user', () => {
    require('./containers/user/login.test')
  })
  describe('pro', () => {
    require('./containers/pro/SearchPro.test')
    require('./containers/pro/ProList.test')
  })
  describe('content', () => {
    require('./containers/content.test')
  })
  describe('content', () => {
    require('./containers/content.test')
  })
})

describe('reducer', () => {
  require('./reducer/auth.test')
  describe('content', () => {
    require('./reducer/content.test')
  })
  describe('pro', () => {
    require('./reducer/pro/prosReducer.test')
  })
})

describe('components', () => {
  require('./components/form/Input.test')
  require('./components/form/Button.test')
  require('./components/form/Form.test')
})
