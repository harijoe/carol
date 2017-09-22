import { URL } from 'url'
import client from './promisified-nightwatch-client'
import getAppUrl from '../lib/app'

const SIMULADO_PORT = 7001

export const goToCookiesPage = () => {
  const cookiesUrl = new URL(getAppUrl('/cookies'))
  cookiesUrl.port = SIMULADO_PORT
  client.url(cookiesUrl.toString())
}
