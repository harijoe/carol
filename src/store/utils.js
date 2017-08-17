import forIn from 'lodash/forIn'

const req = require.context('.', true, /\.\/.+\/utils\.js$/)

req.keys().forEach(key => {
  const actions = req(key)

  forIn(actions, (action, name) => {
    module.exports[name] = action
  })
})
