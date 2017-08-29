import algoliaSearch from 'algoliasearch'
import { algolia, mocking } from 'config'
import mockedIndex from './mocks'

const client = algoliaSearch('TIM81UW1UV', algolia.apiKey)

export const projectFlowIndex = mocking ? mockedIndex : client.initIndex(algolia.projectFlowIndex)

export default client
