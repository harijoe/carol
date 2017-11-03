/* eslint-disable no-use-before-define, import/newline-after-import, import/first */

/*
  Rewrites the selectors so that they select from the domain they are in
  eg: selectors declared in post/selectors.js are to be called with state.post
 */
const selectDomain = (selectors, domain) => {
  const transformed = {}
  Object.keys(selectors).forEach(key => { transformed[key] = (state, ...args) => selectors[key](state[domain], ...args) })
  return transformed
}

import * as authSelectors from './auth/selectors'
export const fromAuth = selectDomain(authSelectors, 'auth')
import * as contextSelectors from './context/selectors'
export const fromContext = selectDomain(contextSelectors, 'context')
import * as firmSelectors from './firm/selectors'
export const fromFirm = selectDomain(firmSelectors, 'firm')
import * as postSelectors from './post/selectors'
export const fromPost = selectDomain(postSelectors, 'post')
import * as projectSelectors from './project/selectors'
export const fromProject = selectDomain(projectSelectors, 'project')
import * as projectElaborationSelectors from './projectElaboration/selectors'
export const fromProjectElaboration = selectDomain(projectElaborationSelectors, 'projectElaboration')
import * as routingSelectors from './routing/selectors'
export const fromRouting = selectDomain(routingSelectors, 'routing')
import * as searchEngineSelectors from './searchEngine/selectors'
export const fromSearchEngine = selectDomain(searchEngineSelectors, 'searchEngine')
import * as statusSelectors from './status/selectors'
export const fromStatus = selectDomain(statusSelectors, 'status')
import * as userSelectors from './user/selectors'
export const fromUser = selectDomain(userSelectors, 'user')
