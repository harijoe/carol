/*
  Removes actionType suffix
  eg: POST_LIST_FAILURE => { prefix: 'POST_LIST', suffix: 'FAILURE' }
 */

const splitActionType = actionType => ({
  prefix: actionType.split('_').slice(0, -1).join('_'),
  suffix: actionType.split('_').slice(-1).join(),
})

export default splitActionType
