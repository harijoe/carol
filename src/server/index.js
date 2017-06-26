import { reset as resetCache } from 'sagas/ssr/cache'
import config from 'config'
import generateHtml from './generateHtml'
import initSagas from './initSagas'
import initStore from './initStore'

export default async function (store, renderProps, req, res) {
  initStore(store, req)

  // Handle cache purge
  if (req.url === '/purge-ssr' && req.method === 'POST' && req.headers.authorization === `Bearer ${config.purgeCacheToken}`) {
    console.info('Cache purge requested')
    resetCache()
    await initSagas(store, renderProps, true)
    res.send('Cache purged and rebuilt')
  } else {
    await initSagas(store, renderProps)

    const isNotFound = renderProps.components.some(component => component.name === 'NotFoundPage')
    const status = isNotFound ? 404 : 200

    res.status(status).send(generateHtml(store, renderProps))
  }
}
