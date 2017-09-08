import client from './promisified-nightwatch-client'

export const goToCookiesPage = () => client.url('http://carol-fr-dev.qarx.io:7001/cookies')
