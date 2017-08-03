import uuid from 'uuid/v4'

import { mocking } from 'config'

export default () => {
  if (mocking) {
    return 'MOCK_SESSION_ID'
  }

  return uuid()
}
