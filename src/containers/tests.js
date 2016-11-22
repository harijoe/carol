describe('User', () => {
  describe('Login', () => {
    require('./user/Login/test')
  })
})
describe('Pro', () => {
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
  describe('UrlPro', () => {
    require('./pro/LinkPro/test')
  })
})
describe('Country', () => {
  require('./Country/ducks/reducer.test')
  require('./Country/test')
})
describe('Header', () => {
  require('./Header/test')
  require('./Menu/test')
  require('./MenuLogin/test')
  require('./MenuBurger/test')
})
describe('LatestProjectsOnMap', () => {
  require('./LatestProjectsOnMap/test')
  require('./LatestProjectsOnMap/ducks/reducer.test')
  require('./LatestProjectsOnMap/ducks/actions.test')
})
describe('LatestProjectsResources', () => {
  require('./LatestProjectsResources/test')
  require('./LatestProjectsResources/ducks/reducer.test')
  require('./LatestProjectsResources/ducks/actions.test')
})
