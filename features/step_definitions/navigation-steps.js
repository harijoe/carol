import { defineSupportCode } from 'cucumber'
import getAppUrl from '../lib/app'

import driver from '../lib/driver'

defineSupportCode(({ When }) => {
  When(/I go to the '(home|auto-validation step 1|chatbot)' page/, async page => {
    const navigateTo = path => driver.get(getAppUrl(path))
    const paths = {
      home: '/',
      'auto-validation step 1': '/projects/b2c515b9-d4fa-4cfd-b4e3-bb3cc9fd9f44/account',
      chatbot: '/project-elaboration',
    }

    await navigateTo(paths[page])
  })
})
