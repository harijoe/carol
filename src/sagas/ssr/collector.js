import { spawn } from 'redux-saga/effects'

/*
  This file is used to store sagas during SSR
 */
const collector = []

/*
 This generator is used as a wrapper around a saga to catch errors thrown from it
 */
function* protectSaga(saga, args) {
  try {
    yield* saga(args)
  } catch (e) {
    console.error(e)
  }
}

export const add = (saga, values) => collector.push(spawn(args => protectSaga(saga, args), values))

export const list = () => collector

export const clear = () => (collector.length = 0)