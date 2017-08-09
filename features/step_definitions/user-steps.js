import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'
import * as user from '../mocks/user'

defineSupportCode(({ Given }) => {
  Given(/I have already filled some personal information:/, async table => {
    await simulado.mock({
      path: '/users/me',
      response: {
        ...user.basic,
        ...table.hashes()[0],
      },
    })
  })
})
