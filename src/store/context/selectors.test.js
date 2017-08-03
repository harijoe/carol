import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    accountNavigation: false,
    chatbotPopin: {enabled: false, mode: 'signin'},
    country: 'GB',
    dryRun: false,
    features: {},
    initialQueryParams: {},
    lang: 'en',
    mainNavigation: false,
    signInPopin: false,
    ssr: true,
  })
})

test('getLang', () => {
  expect(selectors.getLang({lang: 'myLang'})).toEqual('myLang')
  expect(selectors.getCountry({country: 'myCountry'})).toEqual('myCountry')
  expect(selectors.getLocale({lang: 'myLang', country: 'myCountry'})).toEqual('myLang-myCountry')
})
