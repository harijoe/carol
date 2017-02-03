export const PROJECT_SUBMIT = 'PROJECT_SUBMIT'
export const PROJECT_SUBMIT_REQUEST = 'PROJECT_SUBMIT_REQUEST'
export const PROJECT_SUBMIT_SUCCESS = 'PROJECT_SUBMIT_SUCCESS'
export const PROJECT_SUBMIT_FAILURE = 'PROJECT_SUBMIT_FAILURE'
export const PROJECT_LIST = 'PROJECT_LIST'
export const PROJECT_LIST_REQUEST = 'PROJECT_LIST_REQUEST'
export const PROJECT_LIST_SUCCESS = 'PROJECT_LIST_SUCCESS'
export const PROJECT_LIST_FAILURE = 'PROJECT_LIST_FAILURE'

export const projectSubmit = {
  request: () => ({ type: PROJECT_SUBMIT_REQUEST }),
  success: () => ({ type: PROJECT_SUBMIT_SUCCESS }),
  failure: () => ({ type: PROJECT_SUBMIT_FAILURE }),
}

export const projectList = {
  request: (params, resolve, reject) => ({ type: PROJECT_LIST_REQUEST, params, resolve, reject }),
  success: list => ({ type: PROJECT_LIST_SUCCESS, list }),
  failure: error => ({ type: PROJECT_LIST_FAILURE, error }),
}
