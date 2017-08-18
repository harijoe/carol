import algoliaSearch from 'algoliasearch'
import { algolia, mocking } from 'config'
import mockedIndex from './mocks'

const client = algoliaSearch('TIM81UW1UV', algolia.apiKey)

export const projectFlowIndex = mocking ? client.initIndex('staging_ProjectFlow_dev') : mockedIndex

export default client
