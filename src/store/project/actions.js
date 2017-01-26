export const PROJECT_SUBMIT_REQUEST = 'PROJECT_SUBMIT_REQUEST'
export const PROJECT_SUBMIT_SUCCESS = 'PROJECT_SUBMIT_SUCCESS'
export const PROJECT_SUBMIT_FAILURE = 'PROJECT_SUBMIT_FAILURE'

export const submitProject = {
  request: () => ({ type: PROJECT_SUBMIT_REQUEST }),
  success: () => ({ type: PROJECT_SUBMIT_SUCCESS }),
  failure: () => ({ type: PROJECT_SUBMIT_FAILURE }),
}
