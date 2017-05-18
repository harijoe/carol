import { fork } from 'redux-saga/effects'
import forIn from 'lodash/forIn'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

const sagas = []

req.keys().forEach(key => sagas.push(req(key).default))

req.keys().forEach((key) => {
  const elements = req(key)

  forIn(elements, (element, name) => {
    module.exports[name] = element
  })
})

/*
  Don't remove .default here,

  see server/initSagas.js for more explanations
 */
module.exports.default = function* () {
  yield sagas.map(fork)
}
