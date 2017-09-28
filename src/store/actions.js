import forIn from 'lodash/forIn'

export const CLIENT_INITIATED = 'CLIENT_INITIATED'

export const clientInitiated = () => ({
  type: CLIENT_INITIATED,
})

const req = require.context('.', true, /\.\/.+\/actions\.js$/)

req.keys().forEach(key => {
  const actions = req(key)

  forIn(actions, (action, name) => {
    module.exports[name] = action
  })
})
