import simulado from 'simulado'
import { defineSupportCode } from 'cucumber'

import mocks from '../mocks/index'

defineSupportCode(({ Before }) => {
  Before(async () => {
    await simulado.defaults(mocks)
  })
})
