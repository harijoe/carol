import generateHtml from './generateHtml'
// import initSagas from './initSagas'
import initStore from './initStore'

export default async function (store, renderProps, req, res) {
  initStore(store, req)

  // @TODO: re-enable it once the new certificates are live
  // await initSagas(store, renderProps)

  const rendered = generateHtml(store, renderProps)

  res.send(rendered)
}
