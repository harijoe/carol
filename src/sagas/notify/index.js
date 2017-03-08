import { put, select } from 'redux-saga/effects'
import { addNotification } from 'reapop'

import { fromLocale } from 'store/selectors'
import translations from '../../translations'

export default function* notify(title, message, status = 'success') {
  const language = yield select(fromLocale.getLang)

  yield put(addNotification({
    title: title != null ? translations[language][title] : '',
    message: message != null ? translations[language][message] : '',
    status,
  }))
}
