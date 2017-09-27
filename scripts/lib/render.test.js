import render from './render'

it('renders simple text', () => {
  expect(render('Hello world!')).toEqual('Hello world!')
})

it('renders line breaks', () => {
  expect(render('First\nSecond')).toEqual('First<br>\nSecond')
})

it('renders links', () => {
  expect(render('This [link](company.com) works!')).toEqual('This <a href="company.com">link</a> works!')
})

it('renders links with blank target', () => {
  expect(render('This [link](company.com){target=_blank} works!')).toEqual('This <a href="company.com" target="_blank">link</a> works!')
})

it('renders i18n parameterized text', () => {
  const parameterizedText = '{firmsNumber, plural, =0 {Pro trouvé} =1 {# Pro trouvé} other {# Pros trouvés}}'
  expect(render(parameterizedText)).toEqual(parameterizedText)
})
