import algoliaSearch from 'algoliasearch'
import { algolia, mocking } from 'config'
import mockedIndex from './mocks'

const client = algoliaSearch('TIM81UW1UV', algolia.apiKey)

export const projectFlowIndex = country => mocking ? mockedIndex : client.initIndex(algolia.projectFlowIndex[country])
export const wordpressContentIndex = country => client.initIndex(algolia.wordpressContentIndex[country])

export default client
