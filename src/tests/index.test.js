describe('actions', () => {
  describe('user', () => {
    require('./actions/user/login.test.js')
  })
})
describe('containers', () => {
  require('./containers/home.test.js')
  describe('user', () => {
    require('./containers/user/login.test.js')
  })
})

describe('reducer', () => {
  require('./reducer/reducer-auth.test.js')
})

describe('components', () => {
  require('./components/input.test')
})
