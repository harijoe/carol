import generateHtml from './generateHtml'
import initSagas from './initSagas'
import initStore from './initStore'

export default async function(store, renderProps, req, res) {
  initStore(store, req)

  await initSagas(store, renderProps)

  const isNotFound = renderProps.components.some(component => component.name === 'NotFoundPage')
  const status = isNotFound ? 404 : 200

  res.status(status).send(generateHtml(store, renderProps))
}
