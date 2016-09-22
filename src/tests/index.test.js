describe('actions', () => {
  describe('user', () => {
    require('./actions/user/login.test')
  })
  describe('pro', () => {
    require('./actions/pro/searchPro.test')
  })
})
describe('containers', () => {
  require('./containers/home.test.js')
  describe('user', () => {
    require('./containers/user/login.test')
  })
  describe('pro', () => {
    require('./containers/pro/SearchPro.test')
    require('./containers/pro/ProList.test')
  })
})

describe('reducer', () => {
  require('./reducer/authReducer.test')
  describe('pro', () => {
    require('./reducer/pro/prosReducer.test')
  })
})

describe('components', () => {
  require('./components/Input.test')
  require('./components/Button.test')
})
