import { expectSaga } from 'redux-saga-test-plan'
import { put, take } from 'redux-saga/effects'
import { takeEvery, takeLatest, putAndAwait } from './'

describe('effects', () => {
  it('should not break saga in takeEvery even when an exception is thrown', () => {
    const error = new Error()

    const throwingSaga = function() {
      throw error
    }

    return expectSaga(takeEvery, 'PATTERN', throwingSaga)
      .dispatch({ type: 'PATTERN' })
      .run()
  })

  it('should not break saga in takeLatest even when an exception is thrown', () => {
    const error = new Error()

    const throwingSaga = function() {
      throw error
    }

    return expectSaga(takeLatest, 'PATTERN', throwingSaga)
      .dispatch({ type: 'PATTERN' })
      .run()
  })
})

describe('putAndAwait', () => {
  it('puts the REQUEST and awaits its success', () => {
    const request = { type: 'THINGY_REQUEST' }
    const gen = putAndAwait(request)

    expect(gen.next().value).toEqual(put(request))
    expect(gen.next().value).toEqual(take(['THINGY_SUCCESS', 'THINGY_FAILURE']))
    expect(gen.next({ type: 'THINGY_SUCCESS' }).done).toBe(true)
  })

  it('puts the REQUEST and throws if the call fails', () => {
    const request = { type: 'THINGY_REQUEST' }
    const gen = putAndAwait(request)

    expect(gen.next().value).toEqual(put(request))
    expect(gen.next().value).toEqual(take(['THINGY_SUCCESS', 'THINGY_FAILURE']))
    expect(() => gen.next({ type: 'THINGY_FAILURE' }).done).toThrowErrorMatchingSnapshot()
  })

  it('throws if action is not a request', () => {
    const request = { type: 'THINGY_SOMETHING_ELSE' }
    const gen = putAndAwait(request)

    expect(() => gen.next()).toThrowErrorMatchingSnapshot()
  })
})
