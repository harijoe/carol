describe('actions', () => {
  describe('user', () => {
    describe('login', () => {
      require('./services/auth/ducks/actions.test.js')
    })
    describe('profile', () => {
      require('./pages/user/Profile/ducks/actions.test.js')
    })
    describe('signup', () => {
      require('./pages/user/Signup/Registration/ducks/actions.test.js')
    })
  })
  describe('pro', () => {
    describe('searchPro', () => {
      require('./containers/pro/ducks/actions.test.js')
    })
  })
  describe('content', () => {
    require('./pages/Content/ducks/actions.test.js')
  })
  describe('country reducer', () => {
    require('./containers/Country/ducks/reducer.test.js')
  })
  describe('country', () => {
    require('./containers/Country/test')
  })
})

describe('containers', () => {
  describe('home', () => {
    require('./pages/Home/test')
  })
  describe('searchSite', () => {
    require('./pages/SearchSite/test')
  })
  describe('user', () => {
    describe('login', () => {
      require('./containers/user/Login/test')
    })
    describe('profile', () => {
      require('./pages/user/Profile/test')
    })
    describe('signup', () => {
      require('./pages/user/Signup/Registration/test')
    })
    describe('message', () => {
      require('./pages/user/Message/test')
    })
    describe('project', () => {
      require('./pages/user/Project/test')
    })
  })
  describe('pro', () => {
    describe('SearchPro', () => {
      require('./containers/pro/SearchPro/test')
    })
    describe('ProList', () => {
      require('./containers/pro/ProList/test')
    })
  })
  describe('content', () => {
    require('./pages/Content/test')
  })
  describe('help', () => {
    require('./pages/Help/test')
  })
  describe('findAPro', () => {
    require('./pages/pro/FindAPro/index')
  })
  describe('urlPro', () => {
    require('./containers/pro/LinkPro/test')
  })
})

describe('reducer', () => {
  require('./services/auth/ducks/reducer.test.js')
  describe('content', () => {
    require('./pages/Content/ducks/reducer.test.js')
  })
  describe('pro', () => {
    require('./containers/pro/ducks/reducer.test.js')
  })
  describe('user', () => {
    require('./pages/user/Profile/ducks/reducer.test.js')
    require('./pages/user/Signup/Registration/ducks/reducer.test.js')
  })
  describe('country', () => {
    require('./containers/Country/ducks/reducer.test.js')
  })
})

describe('ui', () => {
  describe('form', () => {
    require('./ui/form/input/Email/test')
    require('./ui/form/input/Password/test')
    require('./ui/form/input/Phone/test')
    require('./ui/form/input/Text/test')
    require('./ui/form/input/Button/test')
    require('./ui/form/Form/test')
  })
  describe('header', () => {
    require('./containers/Header/test')
    require('./containers/Menu/test')
    require('./containers/MenuLogin/test')
    require('./containers/MenuBurger/test')
  })
})
