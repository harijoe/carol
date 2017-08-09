import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'
import * as project from '../mocks/project'
import * as user from '../mocks/user'

defineSupportCode(({ Given }) => {
  Given(/My current project already has informations/, async () => {
    await simulado.mock({
      path: '/projects/MOCK_PROJECT_ID',
      response: project.toValidateWithInformations,
    })
  })
  Given(/My phone is validated/, async () => {
    await simulado.mock({
      path: '/users/me',
      response: user.phoneValidated,
    })
  })
})
