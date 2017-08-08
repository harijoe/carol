import { defineSupportCode } from 'cucumber'
import simulado from 'simulado'
import * as project from '../mocks/project'

defineSupportCode(({ Given }) => {
  Given(/My current project already has informations/, async () => {
    await simulado.mock(  {
      path: '/projects/MOCK_PROJECT_ID',
      response: project.toValidateWithInformations,
    })
  })
})
