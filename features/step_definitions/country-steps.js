import { defineSupportCode } from 'cucumber'

import environment from '../lib/environment'

defineSupportCode(({ Given }) => {

  Given(/I am an? (english|spanish) user/, country => {
    environment.locale = {
      english: 'en-GB',
      spanish: 'es-ES',
    }[country]
  })

})
