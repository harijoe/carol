import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({country: 'GB', popinAccount: false, popinNavigation: false, lang: 'en', ssr: true})
})

test('getLang', () => {
  expect(selectors.getLang({ lang: 'myLang' })).toEqual('myLang')
  expect(selectors.getCountry({ country: 'myCountry' })).toEqual('myCountry')
  expect(selectors.getLocale({ lang: 'myLang', country: 'myCountry' })).toEqual('myLang_myCountry')
})
