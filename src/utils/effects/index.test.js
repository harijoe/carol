import { expectSaga } from 'redux-saga-test-plan'
import { takeEvery, takeLatest } from './'

describe('effects', () => {
  it('should not break saga in takeEvery even when an exception is thrown', () => {
    const error = new Error()

    const throwingSaga = function () {
      throw error
    }

    return expectSaga(takeEvery, 'PATTERN', throwingSaga)
      .dispatch({ type: 'PATTERN' })
      .run()
  })

  it('should not break saga in takeLatest even when an exception is thrown', () => {
    const error = new Error()

    const throwingSaga = function () {
      throw error
    }

    return expectSaga(takeLatest, 'PATTERN', throwingSaga)
      .dispatch({ type: 'PATTERN' })
      .run()
  })
})
