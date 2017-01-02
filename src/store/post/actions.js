export const POST_LIST = 'POST_LIST'
export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'

export const postList = {
  request: (scope, tags, limit, resolve, reject) => ({ type: POST_LIST_REQUEST, scope, tags, limit, resolve, reject }),
  success: (list, scope) => ({ type: POST_LIST_SUCCESS, list, scope }),
  failure: error => ({ type: POST_LIST_FAILURE, error }),
}
