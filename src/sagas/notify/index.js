import { put, select } from 'redux-saga/effects'
import { addNotification } from 'reapop'

import { fromContext } from 'store/selectors'
import translations from '../../translations'

/**
 * Return a new string in witch all matches to a pattern like %pattern% are replaced
 *
 *  Example:
 *    const str = 'My name is %fistname% %name%'
 *    const replacer = {
 *      firstname: 'Joe',
 *      name: 'Dalton',
 *    }
 *
 *    replace(str, replacer) will return "My name is Joe Dalton"
 **/
const replace = (str, replacer = {}) => {
  let strTransformed = str

  Object.keys(replacer).forEach((key) => {
    strTransformed = strTransformed.replace(`%${key}%`, replacer[key])
  })

  return strTransformed
}

export default function* notify(title, message, status = 'success', titleValues = {}, messageValues = {}) {
  const supportedStatuses = ['default', 'info', 'success', 'warning', 'error']

  if (!supportedStatuses.includes(status)) {
    throw new Error(`Status: ${status} is not defined, use one of : ${supportedStatuses.join(', ')}`)
  }

  const language = yield select(fromContext.getLang)
  const titleTranslated = title != null ? translations[language][title] : ''
  const messageTranslated = message != null ? translations[language][message] : ''

  yield put(addNotification({
    title: replace(titleTranslated, titleValues),
    message: replace(messageTranslated, messageValues),
    status,
  }))
}
