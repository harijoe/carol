describe('home', () => {
  require('./Home/test')
})
describe('searchSite', () => {
  require('./SearchSite/test')
})
describe('content', () => {
  require('./Content/test')
})
describe('help', () => {
  require('./Help/test')
})
describe('findAPro', () => {
  require('./pro/FindAPro/index')
})
describe('content', () => {
  require('./Content/ducks/reducer.test')
  require('./Content/ducks/actions.test')
})
describe('user', () => {
  describe('profile', () => {
    require('./user/Profile/ducks/reducer.test')
    require('./user/Profile/ducks/actions.test')
    require('./user/Profile/test')
  })
  describe('signup', () => {
    require('./user/Signup/Registration/test')
    require('./user/Signup/Registration/ducks/actions.test')
    require('./user/Signup/Registration/ducks/reducer.test')
  })
  describe('forgotPasswordMail', () => {
    require('./user/ForgotPassword/test')
    require('./user/ForgotPassword/ducks/actions.test')
  })
  describe('message', () => {
    require('./user/Message/test')
  })
  describe('project', () => {
    require('./user/Project/test')
  })
})
