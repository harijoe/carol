describe('user', () => {
  describe('login', () => {
    require('./user/Login/test')
  })
})
describe('pro', () => {
  describe('SearchPro', () => {
    require('./pro/SearchPro/test')
    require('./pro/ducks/actions.test')
  })
  describe('ProList', () => {
    require('./pro/ProList/test')
  })
  describe('ducks', () => {
    require('./pro/ducks/reducer.test')
  })
  describe('urlPro', () => {
    require('./pro/LinkPro/test')
  })
})
describe('country', () => {
  require('./Country/ducks/reducer.test')
  require('./Country/test')
})
describe('header', () => {
  require('./Header/test')
  require('./Menu/test')
  require('./MenuLogin/test')
  require('./MenuBurger/test')
})
