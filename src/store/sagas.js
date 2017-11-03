import { fork } from 'redux-saga/effects'

import auth from './auth/sagas'
import context from './context/sagas'
import firm from './firm/sagas'
import post from './post/sagas'
import project from './project/sagas'
import projectElaboration from './projectElaboration/sagas'
import searchEngine from './searchEngine/sagas'
import user from './user/sagas'

export * from './auth/sagas'
export * from './context/sagas'
export * from './firm/sagas'
export * from './project/sagas'
export * from './user/sagas'

const sagas = [
  auth,
  context,
  firm,
  post,
  project,
  projectElaboration,
  searchEngine,
  user,
]

export default function* () {
  yield sagas.map(fork)
}
