import { fork, cancel, take, put } from 'redux-saga/effects'
import splitActionType from 'utils/actions'
import logging from 'logging'

const takeFlow = ({ cancelLastTask = false } = {}) =>
  function* takeEvery(pattern, saga, ...args) {
    const task = yield fork(function* () {
      let lastTask

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const action = yield take(pattern)

        const safeSaga = function* () {
          try {
            yield* saga(action)
          } catch (e) {
            logging.captureException(e)
          }
        }

        if (cancelLastTask && lastTask) {
          yield cancel(lastTask) // cancel is no-op if the task has already terminated
        }

        lastTask = yield fork(safeSaga, ...args.concat(action))
      }
    })

    return task
  }

export const takeEvery = takeFlow()

export const takeLatest = takeFlow({ cancelLastTask: true })

export const putAndAwait = function* (request) {
  const { type } = request
  if (!type.endsWith('REQUEST')) {
    throw new Error('Can only putAndAwait REQUEST actions!')
  }
  yield put(request)
  const { prefix } = splitActionType(type)
  const result = yield take([`${prefix}_SUCCESS`, `${prefix}_FAILURE`])
  if (result.type.endsWith('FAILURE')) {
    throw new Error(`${prefix} failed`)
  }
  return result
}
