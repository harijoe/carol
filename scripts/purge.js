require('babel-polyfill')
require('babel-core/register')

const fetch = require('isomorphic-fetch')
const { purgeCacheToken } = require('../src/config')

fetch('https://carol-fr.qarx.io/', {
  method: 'PURGE',
  headers: { authorization: `Bearer ${purgeCacheToken}` },
})
  .then(() => console.info('SSR cache purged'))
  .catch(e => console.error('SSR cache purge failed:', e.message, e.stack.replace(/^.*/, '')))

