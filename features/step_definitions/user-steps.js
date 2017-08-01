import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'
import me from '../mocks/me'

defineSupportCode(({ Given }) => {
  Given(/I have already filled some personal information:/, async (table) => {
    await simulado.mock({
      path: '/users/me',
      response: {
        ...me,
        ...table.hashes()[0],
      },
    })
  })
})
