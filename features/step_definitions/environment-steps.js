import { defineSupportCode } from 'cucumber'

import environment from '../lib/environment'

defineSupportCode(({ Given }) => {
  Given(/I am an english user/, () => (environment.locale = 'en_GB'))
})
