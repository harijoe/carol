import { fork } from 'redux-saga/effects'
import forIn from 'lodash/forIn'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

const sagas = []

req.keys().forEach(key => sagas.push(req(key).default))

req.keys().forEach(key => {
  const elements = req(key)

  forIn(elements, (element, name) => {
    /*
     Explanation : Without it `sagas` doesn't contain all of the sagas, but only the last domain's sagas
       (which is user at this time). This occurs only when NODE_ENV is set to production. The solution proposed here is
       to filter the sagas imported in store/sagas to avoid setting module.exports.default. Thus the ES5 default export
       feature is not conflicting with modules.export.default

     Notice : If you find the reason behind this behavior, please send a mail explaining what you
      understood to vallinij@gmail.com
     */
    if (name !== 'default') {
      module.exports[name] = element
    }
  })
})

export default function* () {
  yield sagas.map(fork)
}
