describe('User', () => {
  describe('Login', () => {
    require('./user/Login/test')
  })
})
describe('Pro', () => {
  describe('SearchPro', () => {
    require('./pro/SearchPro/test')
  })
  describe('ProList', () => {
    require('./pro/ProList/test')
    require('./pro/ProList/ducks/actions.test')
    require('./pro/ProList/ducks/reducer.test')
  })
  describe('Pro', () => {
    require('./pro/Pro/test')
    require('./pro/Pro/ducks/actions.test')
    require('./pro/Pro/ducks/reducer.test')
  })
  describe('UrlPro', () => {
    require('./pro/LinkPro/test')
  })
})
describe('Country', () => {
  require('./Country/ducks/reducer.test')
  require('./Country/test')
})
describe('Header', () => {
  require('./Menu/test')
  require('./MenuLogin/test')
  require('./MenuBurger/test')
})
describe('ContentsList', () => {
  require('./ContentsList/test')
  require('./ContentsList/ducks/reducer.test')
  require('./ContentsList/ducks/actions.test')
})
