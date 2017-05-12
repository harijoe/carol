import { fork, cancel, take } from 'redux-saga/effects'

export const takeEvery = function* takeEvery(pattern, saga, ...args) {
  const task = yield fork(function* () {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const action = yield take(pattern)

      const safeSaga = function* () {
        try {
          yield* saga(action)
        } catch (e) {
          // @TODO: To remove before production
          console.error(e.toString())
        }
      }

      yield fork(safeSaga, ...args.concat(action))
    }
  })

  return task
}

export const takeLatest = function* takeLatest(pattern, saga, ...args) {
  const task = yield fork(function* () {
    let lastTask

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const action = yield take(pattern)

      const safeSaga = function* () {
        try {
          yield* saga(action)
        } catch (e) {
          // @TODO: To remove before production
          console.error(e.toString())
        }
      }

      if (lastTask) {
        yield cancel(lastTask) // cancel is no-op if the task has already terminated
      }

      lastTask = yield fork(safeSaga, ...args.concat(action))
    }
  })

  return task
}
