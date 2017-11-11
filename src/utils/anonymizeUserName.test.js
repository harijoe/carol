import anonymiseUserName from './anonymizeUserName'

it('anonymises classic name', () => {
  expect(anonymiseUserName('John Smith')).toEqual('John S.')
})

it('anonymises when name is alone', () => {
  expect(anonymiseUserName('Smith')).toEqual('S.')
})

it('returns empty string when no name', () => {
  expect(anonymiseUserName('')).toEqual('')
})
