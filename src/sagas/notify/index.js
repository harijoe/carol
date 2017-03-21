import { put, select } from 'redux-saga/effects'
import { addNotification } from 'reapop'

import { fromContext } from 'store/selectors'
import translations from '../../translations'

export default function* notify(title, message, status = 'success') {
  const language = yield select(fromContext.getLang)
  const supportedStatuses = ['default', 'info', 'success', 'warning', 'error']

  if (!supportedStatuses.contains(status)) {
    throw new Error(`Status: ${status} is not defined, use one of : ${supportedStatuses.join(', ')}`)
  }

  yield put(addNotification({
    title: title != null ? translations[language][title] : '',
    message: message != null ? translations[language][message] : '',
    status,
  }))
}
