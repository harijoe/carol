import { client } from 'nightwatch-cucumber'

export const goToCookiesPage = () => client.url('http://carol-fr-dev.qarx.io:7001/cookies')
