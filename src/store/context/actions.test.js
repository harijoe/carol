import * as actions from './actions'

test('setCountry', () => {
  expect(actions.setCountry('myCountry')).toEqual({
    type: actions.CONTEXT_SET_COUNTRY,
    payload: 'myCountry',
  })
})

test('setLang', () => {
  expect(actions.setLang('myLang')).toEqual({
    type: actions.CONTEXT_SET_LANG,
    payload: 'myLang',
  })
})
