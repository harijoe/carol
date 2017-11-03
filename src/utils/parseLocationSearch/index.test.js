import parseQueryString from '.'

it('parses a query string', () => {
  expect(parseQueryString('?a=1&b=2')).toEqual({ a: '1', b: '2' })
})

it('parses a URI encoded string', () => {
  expect(parseQueryString('?q=encoded%20uri')).toEqual({ q: 'encoded uri' })
})

it('parses an empty query', () => {
  expect(parseQueryString('')).toEqual({})
})

it('parses an query with no params', () => {
  expect(parseQueryString('?')).toEqual({})
})

it('parses an query param with no value', () => {
  expect(parseQueryString('?param')).toEqual({ param: undefined })
})
