import { defineSupportCode } from 'cucumber'

import client from '../lib/promisified-nightwatch-client'
import { goToCookiesPage } from '../lib/cookies'

defineSupportCode(({ Given }) => {

  Given(/I am logged in/, async () => {
    /*
      To simulate being logged in the browser in the mocks environment,

      1. open the developer tools
      2. in the Application pane / Clear storage area, click the 'Clear site data' button
      3. open the javascript console and run the following:

      d=document;s=c=>d.cookie=c;'refresh_token=r|access_token=a|grant_type=password'.split('|').forEach(s);location.reload()
     */
    await goToCookiesPage()
    await client.setCookie({ name: 'refresh_token', value: 'REFRESH_TOKEN_VALUE', path: '/' })
    await client.setCookie({ name: 'access_token', value: 'REFRESH_TOKEN_VALUE', path: '/' })
    await client.setCookie({ name: 'grant_type', value: 'password', path: '/' })
  })

})
