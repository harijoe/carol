import labelWithColon from './labelWithColon'

it('adds a space before and after the colon for french', () => {
  expect(labelWithColon({ locale: 'fr' })('label')).toEqual('label : ')
})

it('adds a space after the colon for spain', () => {
  expect(labelWithColon({ locale: 'es' })('label')).toEqual('label: ')
})

it('adds a space after the colon for england', () => {
  expect(labelWithColon({ locale: 'en' })('label')).toEqual('label: ')
})
