describe('actions', () => {
  describe('user', () => {
    require('./actions/user/login.test')
    require('./actions/user/profile.test')
    require('./actions/user/signup.test')
  })
  describe('pro', () => {
    require('./actions/pro/searchPro.test')
  })
  describe('content', () => {
    require('./actions/content.test')
  })
  describe('header', () => {
    require('./actions/header.test')
  })
})
describe('containers', () => {
  require('./containers/home.test')
  require('./containers/searchSite.test')
  describe('user', () => {
    require('./containers/user/login.test')
    require('./containers/user/profile.test')
    require('./containers/user/signup.test')
    require('./containers/user/message.test')
    require('./containers/user/project.test')
  })
  describe('pro', () => {
    require('./containers/pro/SearchPro.test')
    require('./containers/pro/ProList.test')
  })
  describe('content', () => {
    require('./containers/content.test')
  })
  describe('help', () => {
    require('./containers/help.test')
  })
  describe('findAPro', () => {
    require('./containers/findAPro.test')
  })
  describe('urlPro', () => {
    require('./containers/pro/LinkPro.test')
  })
})

describe('reducer', () => {
  require('./reducer/auth.test')
  describe('content', () => {
    require('./reducer/content.test')
  })
  describe('pro', () => {
    require('./reducer/pros.test')
  })
  describe('user', () => {
    require('./reducer/user.test')
  })
  describe('country', () => {
    require('./reducer/country.test')
  })
})

describe('components', () => {
  describe('form', () => {
    require('./components/form/Input.test')
    require('./components/form/InputEmail.test')
    require('./components/form/InputPassword.test')
    require('./components/form/InputPhone.test')
    require('./components/form/Button.test')
    require('./components/form/Form.test')
  })
  describe('header', () => {
    require('./components/Header/index.test')
    require('./components/Menu/index.test')
    require('./components/MenuLogin/index.test')
    require('./components/MenuBurger/index.test')
  })
})
