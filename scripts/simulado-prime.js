import simulado from 'simulado'
import mocks from '../features/mocks'

simulado.defaults(mocks).then(() => {
  console.info('Simulado primed!')
})
