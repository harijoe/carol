import algoliaSearch from 'algoliasearch'
import { algolia } from 'config'

const client = algoliaSearch('TIM81UW1UV', algolia.apiKey)

export const projectFlowIndex = client.initIndex('staging_ProjectFlow_dev')

export default client
