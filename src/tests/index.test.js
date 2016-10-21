describe('actions', () => {
  describe('user', () => {
    describe('login', () => {
      require('./actions/user/login.test')
    })
    describe('profile', () => {
      require('./actions/user/profile.test')
    })
    describe('signup', () => {
      require('./actions/user/signup.test')
    })
  })
  describe('pro', () => {
    describe('searchPro', () => {
      require('./actions/pro/searchPro.test')
    })
  })
  describe('content', () => {
    require('./actions/content.test')
  })
  describe('header', () => {
    require('./actions/header.test')
  })
})
describe('containers', () => {
  describe('home', () => {
    require('./containers/home.test')
  })
  describe('searchSite', () => {
    require('./containers/searchSite.test')
  })
  describe('user', () => {
    describe('login', () => {
      require('./containers/user/login.test')
    })
    describe('profile', () => {
      require('./containers/user/profile.test')
    })
    describe('signup', () => {
      require('./containers/user/signup.test')
    })
    describe('message', () => {
      require('./containers/user/message.test')
    })
    describe('project', () => {
      require('./containers/user/project.test')
    })
  })
  describe('pro', () => {
    describe('SearchPro', () => {
      require('./containers/pro/SearchPro.test')
    })
    describe('ProList', () => {
      require('./containers/pro/ProList.test')
    })
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
