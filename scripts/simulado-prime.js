require('babel-core/register')

const simulado = require('simulado')
const mocks = require('../features/mocks').default

simulado.defaults(mocks).then(() => {
  console.info('Simulado primed!')
})
